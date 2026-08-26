import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcade.kingironman.dev"),
  title: { default: "Arcade", template: "%s | Arcade" },
  description: "Small browser games with an unapologetically neon look.",
  alternates: { canonical: "/" },
  keywords: [
    "browser games",
    "arcade games",
    "snake",
    "tetris",
    "hacker typer",
  ],
  authors: [{ name: "KingIronMan2011" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arcade",
    title: "Arcade",
    description: "Small browser games with an unapologetically neon look.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Arcade",
    description: "Small browser games with an unapologetically neon look.",
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${shareTechMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
