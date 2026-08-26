# Arcade

Small browser games with an unapologetically neon look. The arcade shell is built with Next.js, React, Tailwind CSS v4, and TypeScript 6.

[Play it here](https://arcade.kingironman.dev)

## Included games

- **Neon Snake** — a 20×20 grid, wall wrap, rising speed, upgrades, perks, and touch controls.
- **Neon Tetris** — hold, next queue, scoring, upgrades, perks, and keyboard or touch controls.
- **Hacker Typer** — type anything and watch a very convincing terminal do its thing.

Snake and Tetris save high scores, coins, and shop purchases in your browser. Clearing site data clears those saves too.

## Run it locally

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build the production app with `npm run build`. Run `npm run typecheck` to check the TypeScript app.

## Project layout

```text
src/app/      Next.js routes and Tailwind styles
src/components/ Shared React components
public/games/ Original game pages, loaded by the React routes
public/       Shared favicon and web-app icons
```

## Controls

- **Snake:** arrow keys or WASD; use the on-screen D-pad or swipe on mobile.
- **Tetris:** arrow keys to move, Up to rotate, Down to soft drop, and Space to hard drop.
- **Hacker Typer:** start typing.

## License

MIT. See [LICENSE](LICENSE).
