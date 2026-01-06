"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (newLocale: string) => {
    // This regex will replace the current locale in the path with the new one.
    // e.g., /en/about -> /fr/about
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
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
