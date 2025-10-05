import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ViralEdge - Marketing and Professional Software",
  description:
    "Ofrecemos servicios de desarrollo de software de alta calidad, incluido el desarrollo de servidores de Roleplay, soluciones de software generales y servicios de marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="antialiased h-full bg-black text-white">
        {/* Script recomendado fuera del <head> */}
        <Script
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://unpkg.com/same-runtime/dist/index.global.js"
        />

        <Navigation />
        <main className="relative isolate min-h-screen bg-black">
          <PageTransition>
            <ClientBody>{children}</ClientBody>
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
