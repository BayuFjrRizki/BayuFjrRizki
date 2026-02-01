"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";

export function Footer() {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
                    >
                        Bayu
                    </a>

                    {/* Copyright */}
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                        © {currentYear} Bayu Fajar Rizki. {t("footer.rights")}
                    </p>

                    {/* Made with love */}
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Indonesia
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
