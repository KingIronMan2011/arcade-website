import Link from "next/link";

const games = [
  {
    href: "/snake",
    title: "Neon Snake",
    detail: "Wrap the walls. Chase the score.",
    mark: "S",
  },
  {
    href: "/tetris",
    title: "Neon Tetris",
    detail: "Stack clean. Clear lines.",
    mark: "T",
  },
  {
    href: "/hacker",
    title: "Hacker Typer",
    detail: "Type anything. Look dangerous.",
    mark: ">_",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12 sm:px-10">
      <header className="mb-14 flex items-center justify-between border-b border-cyan-400/20 pb-6">
        <Link
          href="/"
          className="font-mono text-xl font-black tracking-[0.32em] text-cyan-300"
        >
          ARCADE
        </Link>
        <span className="font-mono text-xs tracking-[0.2em] text-cyan-100/50">
          SELECT GAME
        </span>
      </header>

      <section className="mb-10 max-w-2xl">
        <p className="mb-3 font-mono text-sm tracking-[0.18em] text-emerald-300">
          // NO INSTALL. NO LOGIN.
        </p>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
          Pick a game and start playing.
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {games.map((game) => (
          <Link
            key={game.href}
            href={game.href}
            className="group rounded-lg border border-cyan-400/25 bg-slate-950/60 p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-950/30"
          >
            <span className="mb-12 block font-mono text-3xl font-bold text-emerald-300">
              {game.mark}
            </span>
            <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-white">
              {game.title}
            </h2>
            <p className="mt-2 text-sm text-slate-300">{game.detail}</p>
            <span className="mt-6 block font-mono text-xs tracking-[0.2em] text-cyan-300">
              PLAY →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
