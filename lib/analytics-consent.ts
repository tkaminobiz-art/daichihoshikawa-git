export const GA4_MEASUREMENT_ID = "G-J6GN9VDFTP";
export const ANALYTICS_CONSENT_STORAGE_KEY = "daichi.analytics-consent.v1";

export type AnalyticsConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    "ga-disable-G-J6GN9VDFTP"?: boolean;
  }
}

const SCRIPT_ID = "daichi-ga4-script";
const COOKIE_PREFIX = "daichi_ga";
const DISABLE_PROPERTY = "ga-disable-G-J6GN9VDFTP";

let configured = false;
let scriptPromise: Promise<void> | null = null;
let lastTrackedPath: string | null = null;

function setAnalyticsDisabled(disabled: boolean) {
  window[DISABLE_PROPERTY] = disabled;
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    // Google Tag expects its commands in the array-like `arguments` shape.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
}

function queueConsentGrant() {
  ensureGtag();
  window.gtag?.("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGoogleTag() {
  if (scriptPromise) return scriptPromise;

  const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existingScript?.dataset.loaded === "true") return Promise.resolve();

  scriptPromise = new Promise<void>((resolve, reject) => {
    const script = existingScript || document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => {
      scriptPromise = null;
      reject(new Error("Google Analytics script failed to load"));
    }, { once: true });
    if (!existingScript) document.head.appendChild(script);
  });

  return scriptPromise;
}

function sanitizedLocation(pathname: string) {
  const path = pathname.startsWith("/") ? pathname : "/";
  return `${window.location.origin}${path}`;
}

function configureAnalytics(pathname: string) {
  if (!configured) {
    queueConsentGrant();
    window.gtag?.("js", new Date());
    configured = true;
  }

  window.gtag?.("config", GA4_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_prefix: COOKIE_PREFIX,
    cookie_flags: "SameSite=Lax;Secure",
    ignore_referrer: true,
    page_location: sanitizedLocation(pathname),
    page_path: pathname,
    page_title: document.title,
    page_referrer: "",
  });
}

export function readAnalyticsConsent(): AnalyticsConsentChoice | null {
  try {
    const saved = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return saved === "granted" || saved === "denied" ? saved : null;
  } catch {
    return null;
  }
}

export function saveAnalyticsConsent(choice: AnalyticsConsentChoice) {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, choice);
    return true;
  } catch {
    return false;
  }
}

export async function activateAnalytics(pathname: string) {
  setAnalyticsDisabled(false);
  configureAnalytics(pathname);
  await loadGoogleTag();

  if (lastTrackedPath === pathname) return;

  window.gtag?.("event", "page_view", {
    page_location: sanitizedLocation(pathname),
    page_path: pathname,
    page_title: document.title,
    page_referrer: "",
  });
  lastTrackedPath = pathname;
}

export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === COOKIE_PREFIX || name.startsWith(`${COOKIE_PREFIX}_`));

  const hostname = window.location.hostname;
  const registrableDomain = hostname.split(".").slice(-2).join(".");
  const domains = new Set([hostname, `.${hostname}`, registrableDomain, `.${registrableDomain}`]);

  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax; Secure`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${domain}; SameSite=Lax; Secure`;
    }
  }
}

export function deactivateAnalytics() {
  setAnalyticsDisabled(true);
  lastTrackedPath = null;
  clearAnalyticsCookies();
}

export function hasLoadedAnalytics() {
  return configured || Boolean(document.getElementById(SCRIPT_ID));
}
