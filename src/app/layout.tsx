import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    <html
      lang="en"
      className={cn("font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
