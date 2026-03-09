import { Link } from 'react-router-dom'
import pkg from '../../package.json'

interface Game {
  path: string
  icon: string
  name: string
  desc: string
  playable: boolean
}

const GAMES: Game[] = [
  {
    path: '/snake',
    icon: '🐍',
    name: 'NEON SNAKE',
    desc: 'Classic snake with a neon twist. Shop upgrades, perks, and endless fun.',
    playable: true,
  },
  {
    path: '/tetris',
    icon: '🧱',
    name: 'NEON TETRIS',
    desc: 'Classic falling blocks, neon style. Hold, ghost piece, 7-bag randomizer.',
    playable: true,
  },
  {
    path: '',
    icon: '🎮',
    name: '???',
    desc: 'Another game in the works. Stay tuned.',
    playable: false,
  },
]

export default function ArcadePage() {
  return (
    <div
      className="relative z-[1] flex flex-col items-center justify-center min-h-screen overflow-y-auto"
      style={{ padding: 'env(safe-area-inset-top,0) env(safe-area-inset-right,0) env(safe-area-inset-bottom,0) env(safe-area-inset-left,0)' }}
    >
      <div className="flex flex-col items-center gap-[clamp(20px,5vw,48px)] px-[clamp(16px,5vw,32px)] py-[clamp(24px,6vw,48px)] w-full max-w-[800px]">

        {/* Header */}
        <div className="text-center">
          <div className="text-[clamp(.55rem,2vw,.65rem)] tracking-[.35em] text-[#556677] mb-2">
            SELECT YOUR GAME
          </div>
          <h1
            className="font-['Orbitron'] font-black text-[clamp(2rem,10vw,3.8rem)] tracking-[.2em] leading-[1.1]"
            style={{ color: 'var(--snake)', textShadow: 'var(--glow-g)', animation: 'flicker 4s ease-in-out infinite' }}
          >
            ARCADE
          </h1>
          <div className="mt-2 text-[clamp(.6rem,2.5vw,.75rem)] tracking-[.18em] text-[#556677]">
            More games coming soon
          </div>
        </div>

        {/* Game grid */}
        <div className="grid w-full gap-[clamp(10px,3vw,16px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))' }}
        >
          {GAMES.map((game) =>
            game.playable ? (
              <Link
                key={game.name}
                to={game.path}
                className="group relative flex flex-col items-start gap-2 rounded-[10px] overflow-hidden min-h-[120px] no-underline transition-all duration-200"
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--border)',
                  padding: 'clamp(16px,4vw,28px) clamp(14px,3vw,22px) clamp(14px,3vw,22px)',
                  color: 'inherit',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--snake)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 8px 32px rgba(0,255,170,.12), 0 0 0 1px rgba(0,255,170,.15)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--border)'
                  el.style.transform = ''
                  el.style.boxShadow = ''
                }}
              >
                {/* corner accent */}
                <div className="absolute top-0 right-0 w-9 h-9 rounded-tr-[10px]"
                  style={{ background: 'linear-gradient(225deg,rgba(0,255,170,.12) 0%,transparent 60%)' }} />

                <div className="text-[clamp(1.8rem,5vw,2.2rem)] leading-none"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(0,255,170,.4))' }}>
                  {game.icon}
                </div>
                <div className="font-['Orbitron'] font-bold text-[clamp(.7rem,2.5vw,.8rem)] tracking-[.15em]"
                  style={{ color: 'var(--snake)' }}>
                  {game.name}
                </div>
                <div className="text-[clamp(.58rem,2vw,.62rem)] tracking-[.06em] text-[#6a8899] leading-relaxed flex-1">
                  {game.desc}
                </div>
                <div className="flex items-center justify-between w-full mt-1">
                  <span className="text-[clamp(.5rem,1.8vw,.55rem)] tracking-[.1em] px-[9px] py-[3px] rounded-[3px] border"
                    style={{ color: 'var(--snake)', borderColor: 'rgba(0,255,170,.35)', background: 'rgba(0,255,170,.06)' }}>
                    PLAYABLE
                  </span>
                  <span className="text-[.8rem] text-[#2a4060] transition-all duration-200 group-hover:text-[var(--snake)] group-hover:translate-x-1">
                    ▶
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={game.name}
                className="relative flex flex-col items-start gap-2 rounded-[10px] overflow-hidden min-h-[120px] opacity-40 cursor-default pointer-events-none"
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--border)',
                  padding: 'clamp(16px,4vw,28px) clamp(14px,3vw,22px) clamp(14px,3vw,22px)',
                }}
              >
                <div className="text-[clamp(1.8rem,5vw,2.2rem)] leading-none">{game.icon}</div>
                <div className="font-['Orbitron'] font-bold text-[clamp(.7rem,2.5vw,.8rem)] tracking-[.15em]"
                  style={{ color: 'var(--snake)' }}>
                  {game.name}
                </div>
                <div className="text-[clamp(.58rem,2vw,.62rem)] tracking-[.06em] text-[#6a8899] leading-relaxed flex-1">
                  {game.desc}
                </div>
                <div className="flex items-center justify-between w-full mt-1">
                  <span className="text-[clamp(.5rem,1.8vw,.55rem)] tracking-[.1em] px-[9px] py-[3px] rounded-[3px] border text-[#556677] border-[#2a3a4a]">
                    COMING SOON
                  </span>
                  <span className="text-[.8rem] text-[#2a4060]">▶</span>
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-[6px] pb-2">
          <span className="text-[clamp(.55rem,2vw,.62rem)] tracking-[.15em] text-[#556677] text-center">
            ARCADE · Built with Claude ·{' '}
            <a
              href="https://github.com/KingIronMan2011/arcade-website"
              target="_blank"
              rel="noreferrer"
              className="text-inherit no-underline border-b border-[#2a3a4a] transition-colors duration-200 hover:text-[var(--snake)]"
            >
              GitHub ↗
            </a>
          </span>
          <span className="text-[.55rem] tracking-[.18em] text-[#6a8899] px-[10px] py-[3px] border border-[#2a3a4a] rounded-[3px]">
            v{pkg.version}
          </span>
        </div>

      </div>
    </div>
  )
}
