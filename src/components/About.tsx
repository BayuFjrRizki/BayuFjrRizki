"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { User, Award, Briefcase } from "lucide-react";

const skills = [
    "Next.js",
    "Laravel",
    "WordPress",
    "React",
    "TypeScript",
    "Photoshop",
    "Illustrator",
    "CorelDraw",
    "Canva",
    "Excel",
    "Spreadsheet",
    "Data Visualization",
];

const stats = [
    { key: "about.experience", value: "3+", icon: User },
    { key: "about.clients", value: "50+", icon: Award },
    { key: "about.projectsDone", value: "100+", icon: Briefcase },
];

export function About() {
    const { t } = useI18n();

    return (
        <section id="about" className="py-20 md:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t("about.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("about.subtitle")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image/Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square max-w-md mx-auto relative">
                            {/* Decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-3xl rotate-6 opacity-20" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-3xl -rotate-3 opacity-30" />

                            {/* Main card */}
                            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-white/10 h-full flex flex-col items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-5xl font-bold text-white mb-6">
                                    BFR
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Bayu Fajar Rizki</h3>
                                <p className="text-primary font-medium mb-6">{t("hero.role")}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.key}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            className="text-center"
                                        >
                                            <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {t(stat.key)}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t("about.description")}
                        </p>

                        {/* Skills */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Skills & Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className="bg-white/5 hover:bg-white/10 border border-white/10 text-sm py-2 px-4 transition-colors"
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
