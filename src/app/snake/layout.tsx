import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neon Snake",
  description:
    "Play Neon Snake, a fast 20×20 browser game with wall wrap and keyboard controls.",
  alternates: { canonical: "/snake" },
  openGraph: { title: "Neon Snake | Arcade", url: "/snake" },
};

export default function SnakeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
