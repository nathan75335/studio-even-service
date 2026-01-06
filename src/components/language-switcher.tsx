"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();


  const handleChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => {
        router.refresh();
    });
  };

  return (
    <Select value={locale} onValueChange={handleChange} disabled={isPending}>
      <SelectTrigger className="w-auto border-none focus:ring-0 gap-2 text-muted-foreground hover:text-primary">
        <Globe className="w-5 h-5"/>
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
      </SelectContent>
    </Select>
  );
}
