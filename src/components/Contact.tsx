"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Instagram,
    Linkedin,
    Github,
    MessageCircle
} from "lucide-react";

const contactInfo = [
    { icon: Mail, label: "Email", value: "bayufjrrizki@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: "+62 877 8198 1373" },
    { icon: MapPin, label: "Location", value: "Indonesia" },
];

const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6287781981373" },
];

export function Contact() {
    const { t } = useI18n();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Build WhatsApp message
        const phoneNumber = "6287781981373";
        const message = `Halo, saya *${formData.name}*

Email: ${formData.email}

Pesan:
${formData.message}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

        // Reset form
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        {t("contact.title")}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("contact.subtitle")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Input
                                            placeholder={t("contact.name")}
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            required
                                            className="bg-white/5 border-white/10 focus:border-primary h-12"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            placeholder={t("contact.email")}
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            required
                                            className="bg-white/5 border-white/10 focus:border-primary h-12"
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            placeholder={t("contact.message")}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            required
                                            rows={5}
                                            className="bg-white/5 border-white/10 focus:border-primary resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary/90 h-12 text-lg rounded-xl group"
                                    >
                                        <MessageCircle className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                                        {t("contact.send")}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <info.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    {info.label}
                                                </p>
                                                <p className="font-medium">{info.value}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
