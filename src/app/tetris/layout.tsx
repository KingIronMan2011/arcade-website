import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neon Tetris",
  description:
    "Play Neon Tetris in your browser with a glowing arcade board and keyboard controls.",
  alternates: { canonical: "/tetris" },
  openGraph: { title: "Neon Tetris | Arcade", url: "/tetris" },
};

export default function TetrisLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
