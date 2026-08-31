import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content/site";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} — Jornalismo`,
  description: `Portfólio de ${site.name}, ${site.role.toLowerCase()}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <BackgroundBlobs />
        <Nav />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
