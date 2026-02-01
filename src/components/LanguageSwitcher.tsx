"use client";

import { useState, useEffect } from "react";
import { useI18n, Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Always render EN as active on initial render to match SSR
    const activeLocale = mounted ? locale : "en";

    return (
        <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1 text-sm transition-all ${activeLocale === "en"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-white"
                    }`}
            >
                EN
            </Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocale("id")}
                className={`rounded-full px-3 py-1 text-sm transition-all ${activeLocale === "id"
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-white"
                    }`}
            >
                ID
            </Button>
        </div>
    );
}

