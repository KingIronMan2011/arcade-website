import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacker Typer",
  description:
    "Type anything to run a neon fake hacker terminal in your browser.",
  alternates: { canonical: "/hacker" },
  openGraph: { title: "Hacker Typer | Arcade", url: "/hacker" },
};

export default function HackerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
