"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Globe,
    Palette,
    BarChart3,
    ExternalLink,
    Server,
    Monitor,
    Smartphone,
    Database,
    X,
    ZoomIn,
    MessageCircle,
    Package,
    Clock
} from "lucide-react";

type Category = "all" | "web" | "design" | "data";

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    icon: React.ComponentType<{ className?: string }>;
}

const projects: Project[] = [
    {
        id: 1,
        category: "web",
        title: "E-Commerce Platform",
        description: "Custom CRM & CMS for online retail business",
        tech: ["Next.js", "Laravel", "MySQL"],
        image: "/projects/ecommerce.png",
        icon: Globe,
    },
    {
        id: 2,
        category: "web",
        title: "Company Profile Website",
        description: "Modern corporate website with CMS",
        tech: ["Next.js", "Tailwind CSS"],
        image: "/projects/company.png",
        icon: Monitor,
    },
    {
        id: 3,
        category: "web",
        title: "Custom CRM System",
        description: "Client relationship management dashboard",
        tech: ["Laravel", "Vue.js", "PostgreSQL"],
        image: "/projects/crm.png",
        icon: Database,
    },
    {
        id: 4,
        category: "web",
        title: "WordPress Business Site",
        description: "SEO-optimized WordPress website",
        tech: ["WordPress", "Elementor", "PHP"],
        image: "/projects/wordpress.png",
        icon: Server,
    },
    {
        id: 5,
        category: "design",
        title: "Social Media Campaign",
        description: "Feed, carousel, and reels content design",
        tech: ["Photoshop", "Canva"],
        image: "/projects/socialmedia.png",
        icon: Smartphone,
    },
    {
        id: 6,
        category: "design",
        title: "Brand Identity Package",
        description: "Logo, mockup, and brand guidelines",
        tech: ["Illustrator", "CorelDraw"],
        image: "/projects/branding.png",
        icon: Palette,
    },
    {
        id: 7,
        category: "design",
        title: "Marketing Ads Design",
        description: "Digital advertising campaign visuals",
        tech: ["Photoshop", "Illustrator"],
        image: "/projects/ads.png",
        icon: Palette,
    },
    {
        id: 10,
        category: "design",
        title: "Flyer Design",
        description: "Eye-catching flyers for events and promotions",
        tech: ["Photoshop", "Illustrator", "Canva"],
        image: "/projects/flyer.png",
        icon: Palette,
    },
    {
        id: 11,
        category: "design",
        title: "Custom Design",
        description: "Bespoke design solutions tailored to your needs",
        tech: ["Photoshop", "Illustrator", "CorelDraw"],
        image: "/projects/custom.png",
        icon: Palette,
    },
    {
        id: 8,
        category: "data",
        title: "Sales Analytics Dashboard",
        description: "Interactive spreadsheet dashboard with charts",
        tech: ["Excel", "Google Sheets"],
        image: "/projects/dashboard.png",
        icon: BarChart3,
    },
    {
        id: 9,
        category: "data",
        title: "Data Cleaning & Visualization",
        description: "Data processing and visual reports",
        tech: ["Excel", "Power Query"],
        image: "/projects/data.png",
        icon: BarChart3,
    },
];

const categories: { key: Category; labelKey: string }[] = [
    { key: "all", labelKey: "All" },
    { key: "web", labelKey: "projects.category.web" },
    { key: "design", labelKey: "projects.category.design" },
    { key: "data", labelKey: "projects.category.data" },
];

export function Projects() {
    const { t } = useI18n();
    const [activeCategory, setActiveCategory] = useState<Category>("all");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <section id="projects" className="py-20 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {t("projects.title")}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            {t("projects.subtitle")}
                        </p>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <Button
                                    key={cat.key}
                                    variant={activeCategory === cat.key ? "default" : "outline"}
                                    onClick={() => setActiveCategory(cat.key)}
                                    className={`rounded-full transition-all ${activeCategory === cat.key
                                        ? "bg-primary shadow-lg shadow-primary/30"
                                        : "border-white/20 hover:bg-white/5"
                                        }`}
                                >
                                    {cat.key === "all" ? "All" : t(cat.labelKey)}
                                </Button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Service Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-3 gap-4 mb-12"
                    >
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Globe className="w-5 h-5 text-primary" />
                                    <span className="font-semibold">{t("projects.category.web")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("projects.web.includes")}</p>
                                <p className="text-sm text-muted-foreground">{t("projects.web.tech")}</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Palette className="w-5 h-5 text-primary" />
                                    <span className="font-semibold">{t("projects.category.design")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("projects.design.pricing")}</p>
                                <p className="text-sm text-muted-foreground">{t("projects.design.revision")}</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <BarChart3 className="w-5 h-5 text-primary" />
                                    <span className="font-semibold">{t("projects.category.data")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("projects.data.tech")}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card
                                    className="group bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                                    onClick={() => openModal(project)}
                                >
                                    <CardContent className="p-0">
                                        {/* Project Image */}
                                        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                                                    <ZoomIn className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="p-5">
                                            <Badge
                                                variant="secondary"
                                                className="mb-3 bg-primary/10 text-primary border-0"
                                            >
                                                {project.category === "web" && t("projects.category.web")}
                                                {project.category === "design" && t("projects.category.design")}
                                                {project.category === "data" && t("projects.category.data")}
                                            </Badge>
                                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.map((tech) => (
                                                    <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="text-xs border-white/10 text-muted-foreground"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-background"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image */}
                            <div className="relative aspect-video bg-slate-900">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Project Info */}
                            <div className="bg-background/95 backdrop-blur-sm p-6 border-t border-white/10">
                                <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <Badge
                                            variant="secondary"
                                            className="mb-2 bg-primary/10 text-primary border-0"
                                        >
                                            {selectedProject.category === "web" && t("projects.category.web")}
                                            {selectedProject.category === "design" && t("projects.category.design")}
                                            {selectedProject.category === "data" && t("projects.category.data")}
                                        </Badge>
                                        <h3 className="text-2xl font-bold mb-2">
                                            {selectedProject.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {selectedProject.description}
                                        </p>

                                        {/* Category Specific Info */}
                                        {selectedProject.category === "web" && (
                                            <div className="bg-primary/5 rounded-lg p-4 mb-4 border border-primary/20">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Package className="w-4 h-4 text-primary" />
                                                    <span className="font-semibold text-primary">Includes:</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                                                    <li>✓ Domain & Hosting Setup</li>
                                                    <li>✓ Maintenance Fee (1 tahun)</li>
                                                    <li>✓ SSL Certificate</li>
                                                    <li>✓ Technical Support</li>
                                                </ul>
                                            </div>
                                        )}

                                        {selectedProject.category === "design" && (
                                            <div className="bg-primary/5 rounded-lg p-4 mb-4 border border-primary/20">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Clock className="w-4 h-4 text-primary" />
                                                    <span className="font-semibold text-primary">Pricing Model:</span>
                                                </div>
                                                <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                                                    <li>✓ Project-based / Monthly</li>
                                                    <li>✓ Max 2x major revisions included</li>
                                                    <li>⚠️ Additional fee for more revisions</li>
                                                </ul>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="border-white/20"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Order Button */}
                                    <div className="w-full md:w-auto">
                                        <Button
                                            size="lg"
                                            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-lg rounded-xl group"
                                            onClick={() => {
                                                const phoneNumber = "6287781981373";
                                                const serviceName = selectedProject.title;
                                                const message = `Halo, saya ingin service ini: *${serviceName}*`;
                                                const encodedMessage = encodeURIComponent(message);
                                                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
                                            }}
                                        >
                                            <MessageCircle className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                                            Pesan Sekarang
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

