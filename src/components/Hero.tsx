"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function Hero() {
    const { t } = useI18n();

    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToProjects = () => {
        const element = document.querySelector("#projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={itemVariants}
                        className="text-primary font-medium text-lg mb-4"
                    >
                        {t("hero.greeting")}
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
                    >
                        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                            {t("hero.name")}
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6"
                    >
                        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                            {t("hero.role")}
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
                    >
                        {t("hero.description")}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            onClick={scrollToContact}
                            className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                        >
                            {t("hero.cta")}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={scrollToProjects}
                            className="px-8 py-6 text-lg rounded-full border-white/20 hover:bg-white/5"
                        >
                            {t("hero.projects")}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator - positioned at bottom of section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                    onClick={() => {
                        const element = document.querySelector("#about");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    <ChevronDown size={32} />
                </motion.div>
            </motion.div>
        </section>
    );
}
