"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/components/i18n-provider";
import { Globe } from "lucide-react";

export default function LanguageDropdown() {
  const { locale, setLocale } = useI18n();

  const label = locale.toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="inline-flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setLocale("en")} aria-label="Switch to English">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("es")} aria-label="Cambiar a Español">
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("sv")} aria-label="Byt till Svenska">
          Svenska
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


