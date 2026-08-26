import Link from "next/link";

type GameFrameProps = {
  name: string;
  source: string;
};

export function GameFrame({ name, source }: GameFrameProps) {
  return (
    <main className="flex min-h-screen flex-col bg-[#030810]">
      <header className="flex items-center justify-between border-b border-cyan-400/20 px-4 py-3 font-mono text-sm">
        <Link href="/" className="tracking-[0.22em] text-cyan-300">
          ← ARCADE
        </Link>
        <span className="text-cyan-100/70">{name}</span>
      </header>
      <iframe title={name} src={source} className="min-h-0 flex-1 border-0" />
    </main>
  );
}
