"use client";

import { useEffect, useRef, type RefObject } from "react";

/** Keep keyboard, assistive technology and scrolling inside the open dialog. */
export function useModalFocus<T extends HTMLElement>(open: boolean, ref: RefObject<T | null>, onClose: () => void) {
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const inertElements: Array<[HTMLElement, boolean]> = [];
    let branch: HTMLElement = dialog;
    while (branch.parentElement && branch !== document.body) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && sibling instanceof HTMLElement) {
          inertElements.push([sibling, sibling.inert]);
          sibling.setAttribute("inert", "");
        }
      }
      branch = branch.parentElement;
    }
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(element => element.getClientRects().length > 0 && !element.closest("[inert]"));
    const focusFirst = () => (dialog.querySelector<HTMLElement>("[data-dialog-close]") || focusable()[0] || dialog).focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    focusFirst();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeRef.current(); }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const index = elements.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();
      if (elements.length === 0) dialog.focus();
      else {
        const next = index < 0 ? (event.shiftKey ? elements.length - 1 : 0)
          : (index + (event.shiftKey ? -1 : 1) + elements.length) % elements.length;
        elements[next].focus();
      }
    };
    const handleFocus = (event: FocusEvent) => { if (!dialog.contains(event.target as Node)) focusFirst(); };
    const handleResize = () => { if (focusable().length === 0) closeRef.current(); };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("focusin", handleFocus);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("focusin", handleFocus);
      window.removeEventListener("resize", handleResize);
      for (const [element, wasInert] of inertElements) element.toggleAttribute("inert", wasInert);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open, ref]);
}
