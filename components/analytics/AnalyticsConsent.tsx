"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ANALYTICS_CONSENT_STORAGE_KEY,
  activateAnalytics,
  AnalyticsConsentChoice,
  deactivateAnalytics,
  hasLoadedAnalytics,
  readAnalyticsConsent,
  saveAnalyticsConsent,
} from "@/lib/analytics-consent";

const subscribeToMount = () => () => undefined;

export default function AnalyticsConsent() {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(subscribeToMount, () => true, () => false);
  const [choice, setChoice] = useState<AnalyticsConsentChoice | null>(() => (
    typeof window === "undefined" ? null : readAnalyticsConsent()
  ));
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (choice !== "granted") deactivateAnalytics();

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== ANALYTICS_CONSENT_STORAGE_KEY) return;
      const nextChoice = event.newValue === "granted" || event.newValue === "denied" ? event.newValue : null;
      if (nextChoice !== "granted") deactivateAnalytics();
      setChoice(nextChoice);
      if (nextChoice === "denied" && hasLoadedAnalytics()) window.location.reload();
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [choice]);

  useEffect(() => {
    if (!mounted || choice !== "granted") return;
    let active = true;

    activateAnalytics(pathname).catch(() => {
      if (active) setLoadError("アクセス解析を開始できませんでした。ページを再読み込みして、もう一度お試しください。");
    });

    return () => {
      active = false;
    };
  }, [choice, mounted, pathname]);

  useEffect(() => {
    if (!settingsOpen) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [settingsOpen]);

  const choose = (nextChoice: AnalyticsConsentChoice) => {
    setSaveError(null);
    setLoadError(null);
    if (!saveAnalyticsConsent(nextChoice)) {
      setSaveError("設定を保存できませんでした。ブラウザの設定を確認して、もう一度お試しください。");
      return;
    }

    const shouldReload = nextChoice === "denied" && (choice === "granted" || hasLoadedAnalytics());
    if (nextChoice === "denied") deactivateAnalytics();
    setChoice(nextChoice);
    setSettingsOpen(false);

    if (shouldReload) window.location.reload();
  };

  if (!mounted) return null;

  return (
    <>
      {choice === null && (
        <section
          className="fixed inset-x-3 bottom-20 z-[10050] border border-white/15 bg-[#071733]/[0.98] p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:inset-x-auto sm:left-1/2 sm:w-[min(32rem,calc(100vw-2rem))] sm:-translate-x-1/2 sm:p-6 lg:bottom-6"
          role="dialog"
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-description"
        >
          <h2 id="analytics-consent-title" className="font-serif text-xl font-bold tracking-wide">
            アクセス解析を許可しますか？
          </h2>
          <div id="analytics-consent-description" className="mt-3 space-y-2 text-sm leading-7 text-white/80">
            <p>許可した場合のみ、Google Analyticsを読み込み、ページの閲覧を計測します。</p>
            <p>検索欄の入力内容と、URLの「?」「#」以降は送信しません。</p>
          </div>
          <a
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex text-xs font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Googleによるデータ利用
          </a>
          {(saveError || loadError) && <p className="mt-3 text-sm font-bold text-[#FFD0D0]" role="alert">{saveError || loadError}</p>}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-12 border border-white/40 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              拒否する
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-12 bg-[#D71920] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#B5151B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              許可する
            </button>
          </div>
        </section>
      )}

      {choice !== null && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-20 right-3 z-[10040] border border-[#0A1A3A]/15 bg-white px-4 py-2 text-xs font-bold text-[#0A1A3A] shadow-[0_8px_24px_rgba(10,26,58,0.18)] transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A3A] lg:bottom-5 lg:right-5"
        >
          アクセス解析の設定
        </button>
      )}

      {settingsOpen && choice !== null && (
        <div className="fixed inset-0 z-[10060] grid place-items-center bg-black/60 p-4" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSettingsOpen(false);
        }}>
          <section
            className="relative w-full max-w-md border-t-4 border-[#D71920] bg-white p-6 text-[#0A1A3A] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="analytics-settings-title"
            aria-describedby="analytics-settings-description"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSettingsOpen(false)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center text-2xl leading-none text-[#0A1A3A] hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A3A]"
              aria-label="設定を閉じる"
            >
              ×
            </button>
            <h2 id="analytics-settings-title" className="pr-10 font-serif text-2xl font-bold">アクセス解析の設定</h2>
            <p className="mt-3 text-sm font-bold">現在：{choice === "granted" ? "許可" : "拒否"}</p>
            <p id="analytics-settings-description" className="mt-3 text-sm leading-7 text-gray-700">
              {choice === "granted"
                ? "許可を取り消すと、解析を停止してページを再読み込みします。"
                : "許可するまで、Google Analyticsは読み込まれません。"}
            </p>
            {(saveError || loadError) && <p className="mt-3 text-sm font-bold text-[#B5151B]" role="alert">{saveError || loadError}</p>}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                aria-pressed={choice === "denied"}
                className={`min-h-12 border px-3 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1A3A] ${choice === "denied" ? "border-[#0A1A3A] bg-[#0A1A3A] text-white" : "border-gray-300 bg-white text-[#0A1A3A] hover:bg-gray-50"}`}
              >
                {choice === "granted" ? "許可を取り消す" : "拒否中"}
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                aria-pressed={choice === "granted"}
                className={`min-h-12 border px-3 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D71920] ${choice === "granted" ? "border-[#D71920] bg-[#D71920] text-white" : "border-[#D71920] bg-white text-[#B5151B] hover:bg-red-50"}`}
              >
                {choice === "granted" ? "許可中" : "許可する"}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
