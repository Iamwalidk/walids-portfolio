"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { keyboardRoutes } from "@/lib/site-config";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || target.isContentEditable;
}

export function GlobalShortcuts() {
  const router = useRouter();
  const pathname = usePathname();
  const gPressedAt = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return;
      }

      if (event.key.toLowerCase() === "g") {
        gPressedAt.current = Date.now();
        return;
      }

      if (event.key === "/" && pathname === "/projects") {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("projects:focus-search"));
        return;
      }

      const now = Date.now();
      const isChord = gPressedAt.current && now - gPressedAt.current < 750;
      if (!isChord) {
        return;
      }

      const key = event.key.toLowerCase();
      if (key === "p") {
        router.push(keyboardRoutes.g_p);
      } else if (key === "o") {
        router.push(keyboardRoutes.g_o);
      } else if (key === "r") {
        router.push(keyboardRoutes.g_r);
      }

      gPressedAt.current = null;
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [pathname, router]);

  return null;
}
