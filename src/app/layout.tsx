import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bayu Fajar Rizki | Freelancer - Full Stack Developer, Designer & Data Analyst",
  description: "Professional freelancer specializing in web development, design, and data analytics. Building digital solutions that matter.",
  keywords: ["freelancer", "web developer", "designer", "data analyst", "Indonesia", "Next.js", "Laravel", "WordPress"],
  authors: [{ name: "Bayu Fajar Rizki" }],
  openGraph: {
    title: "Bayu Fajar Rizki | Freelancer",
    description: "Professional freelancer specializing in web development, design, and data analytics.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
