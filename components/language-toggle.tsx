"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "./i18n-provider";
import { useMemo } from "react";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const isEN = locale === "en";
  const isES = locale === "es";
  const isSV = locale === "sv";

  const variants = useMemo(() => ({
    active: "bg-accent text-accent-foreground",
    idle: "text-muted-foreground hover:text-foreground",
  }), []);

  return (
    <div className="inline-flex items-center rounded-full border border-border p-1">
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 rounded-full px-3 transition-colors ${isEN ? variants.active : variants.idle}`}
        onClick={() => setLocale("en")}
        aria-pressed={isEN}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 rounded-full px-3 transition-colors ${isES ? variants.active : variants.idle}`}
        onClick={() => setLocale("es")}
        aria-pressed={isES}
        aria-label="Cambiar a Español"
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`h-8 rounded-full px-3 transition-colors ${isSV ? variants.active : variants.idle}`}
        onClick={() => setLocale("sv")}
        aria-pressed={isSV}
        aria-label="Byt till Svenska"
      >
        SV
      </Button>
    </div>
  );
}

export default LanguageToggle;


