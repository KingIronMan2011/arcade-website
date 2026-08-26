import Link from "next/link";

const games = [
  {
    href: "/snake",
    icon: "🐍",
    name: "NEON SNAKE",
    description:
      "Classic snake with a neon twist. Shop upgrades, perks, and endless fun.",
  },
  {
    href: "/tetris",
    icon: "🧱",
    name: "NEON TETRIS",
    description:
      "Classic falling blocks, neon style. Hold, ghost piece, 7-bag randomizer.",
  },
  {
    href: "/hacker",
    icon: "👾",
    name: "HACKER TYPER",
    description:
      "Troll your friends with a fake hacker typer that simulates real hacking.",
  },
];

export default function HomePage() {
  return (
    <main className="arcade-launcher">
      <div className="arcade-container">
        <header className="arcade-header">
          <div className="arcade-tag">SELECT YOUR GAME</div>
          <h1>ARCADE</h1>
          <div className="arcade-sub">More games coming soon</div>
        </header>
        <section className="arcade-game-grid">
          {games.map((game) => (
            <Link key={game.href} className="arcade-game-card" href={game.href}>
              <div className="arcade-card-icon">{game.icon}</div>
              <div className="arcade-card-name">{game.name}</div>
              <div className="arcade-card-desc">{game.description}</div>
              <div className="arcade-card-footer">
                <span className="arcade-card-badge arcade-badge-playable">
                  PLAYABLE
                </span>
                <span className="arcade-card-arrow">▶</span>
              </div>
            </Link>
          ))}
          <div className="arcade-game-card arcade-coming-soon">
            <div className="arcade-card-icon">🎮</div>
            <div className="arcade-card-name">???</div>
            <div className="arcade-card-desc">
              Another game in the works. Stay tuned.
            </div>
            <div className="arcade-card-footer">
              <span className="arcade-card-badge arcade-badge-soon">
                COMING SOON
              </span>
              <span className="arcade-card-arrow">▶</span>
            </div>
          </div>
        </section>
        <footer className="arcade-footer">
          <span className="arcade-footer-text">
            ARCADE · Built with Claude ·{" "}
            <a
              href="https://github.com/KingIronMan2011/arcade-website"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </span>
        </footer>
      </div>
    </main>
  );
}
