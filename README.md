# Arcade

Small browser games with an unapologetically neon look. No build step, no framework, no account required.

[Play it here](https://arcade.kingironman.dev)

## Included games

- **Neon Snake** — a 20×20 grid, wall wrap, rising speed, upgrades, perks, and touch controls.
- **Neon Tetris** — hold, next queue, scoring, upgrades, perks, and keyboard or touch controls.
- **Hacker Typer** — type anything and watch a very convincing terminal do its thing.

Snake and Tetris save high scores, coins, and shop purchases in your browser. Clearing site data clears those saves too.

## Run it locally

Clone the repo and open `index.html` in a browser. The games are plain HTML, CSS, and JavaScript, so there is nothing to install.

For a local server:

```sh
npx serve .
```

Then open the address printed in the terminal.

## Project layout

```text
index.html    Arcade home screen
snake.html    Neon Snake
tetris.html   Neon Tetris
hacker.html   Hacker Typer
public/       Shared favicon and web-app icons
```

## Controls

- **Snake:** arrow keys or WASD; use the on-screen D-pad or swipe on mobile.
- **Tetris:** arrow keys to move, Up to rotate, Down to soft drop, and Space to hard drop.
- **Hacker Typer:** start typing.

## License

MIT. See [LICENSE](LICENSE).
