"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        role: "CEO, Tech Startup",
        content: {
            en: "Bayu delivered an exceptional web application for our startup. His attention to detail and technical expertise exceeded our expectations.",
            id: "Bayu memberikan aplikasi web yang luar biasa untuk startup kami. Perhatiannya terhadap detail dan keahlian teknisnya melebihi ekspektasi kami.",
        },
        avatar: "AF",
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        role: "Marketing Manager",
        content: {
            en: "The social media designs were stunning! Our engagement increased by 200% after using Bayu's creative work.",
            id: "Desain media sosialnya sangat memukau! Engagement kami meningkat 200% setelah menggunakan karya kreatif Bayu.",
        },
        avatar: "SN",
    },
    {
        id: 3,
        name: "Budi Santoso",
        role: "Business Owner",
        content: {
            en: "Professional, responsive, and delivers quality work. The CRM system he built transformed our business operations.",
            id: "Profesional, responsif, dan menghasilkan karya berkualitas. Sistem CRM yang dia bangun mengubah operasi bisnis kami.",
        },
        avatar: "BS",
    },
    {
        id: 4,
        name: "Dewi Lestari",
        role: "Data Analyst Lead",
        content: {
            en: "The dashboard Bayu created made our data analysis so much easier. Clean visualizations and intuitive interface.",
            id: "Dashboard yang dibuat Bayu membuat analisis data kami jauh lebih mudah. Visualisasi bersih dan antarmuka intuitif.",
        },
        avatar: "DL",
    },
];

export function Testimonials() {
    const { t, locale } = useI18n();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section id="testimonials" className="py-20 md:py-32 relative">
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
                        {t("testimonials.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("testimonials.subtitle")}
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                                <CardContent className="p-8 md:p-12">
                                    <Quote className="w-12 h-12 text-primary/30 mb-6" />
                                    <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                                        {testimonials[currentIndex].content[locale]}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-lg font-bold text-white">
                                            {testimonials[currentIndex].avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-muted-foreground">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="rounded-full border-white/20 hover:bg-white/5"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? "w-8 bg-primary"
                                            : "bg-white/20 hover:bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="rounded-full border-white/20 hover:bg-white/5"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
