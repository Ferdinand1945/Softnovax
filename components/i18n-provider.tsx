"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Locale = "en" | "es" | "sv";

type Messages = Record<string, string>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function loadMessages(locale: Locale): Messages {
  try {
    // Using require to allow Next.js bundling without dynamic import complexities
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const msgs: Messages = require(`../locales/${locale}.json`);
    return msgs || {};
  } catch {
    return {};
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Important: default to 'en' on first render to match SSR output and avoid hydration mismatches.
  const [locale, setLocaleState] = useState<Locale>("en");

  const [messages, setMessages] = useState<Messages>(() => loadMessages("en"));

  // After mount, read preferred locale from localStorage or navigator and update.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("locale") as Locale | null;
    if (stored === "en" || stored === "es" || stored === "sv") {
      setLocaleState(stored);
      return;
    }
    const nav = navigator.language?.toLowerCase() || "en";
    if (nav.startsWith("es")) setLocaleState("es");
    else if (nav.startsWith("sv")) setLocaleState("sv");
    else setLocaleState("en");
  }, []);

  useEffect(() => {
    setMessages(loadMessages(locale));
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string, fallback?: string) => {
      if (!key) return fallback ?? "";
      const value = messages[key];
      return value ?? fallback ?? key;
    },
    [messages]
  );

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


