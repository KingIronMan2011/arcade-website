"use client";

import { useState } from "react";

export default function TetrisPage() {
  const [score, setScore] = useState(0);
  return <main className="game-page tetris-page"><header className="game-topbar"><a href="/">← ARCADE</a><h1>NEON TETRIS</h1><button onClick={() => setScore((value) => value + 100)}>▶ PLAY</button></header><div className="game-layout"><section className="tetris-board">{Array.from({ length: 200 }, (_, index) => <span key={index} className={`tetris-cell ${index > 174 && index % 3 === 0 ? "filled" : ""}`} />)}</section><aside className="game-sidebar"><h2>STATS</h2><p>SCORE <b>{score}</b></p><p>LEVEL <b>1</b></p><p>LINES <b>0</b></p><p>Arrow keys move. Space drops.</p></aside></div></main>;
}
