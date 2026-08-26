"use client";

import { useEffect, useState } from "react";

type Point = { x: number; y: number };
const size = 20;
const makeFood = (snake: Point[]) => {
  let food: Point;
  do food = { x: Math.floor(Math.random() * size), y: Math.floor(Math.random() * size) };
  while (snake.some((part) => part.x === food.x && part.y === food.y));
  return food;
};

export default function SnakePage() {
  const [snake, setSnake] = useState<Point[]>([{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }]);
  const [food, setFood] = useState<Point>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => { const handler = (event: KeyboardEvent) => { const moves: Record<string, Point> = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 }, w: { x: 0, y: -1 }, s: { x: 0, y: 1 }, a: { x: -1, y: 0 }, d: { x: 1, y: 0 } }; if (moves[event.key]) { event.preventDefault(); setDirection(moves[event.key]); setRunning(true); } }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, []);
  useEffect(() => { if (!running) return; const id = window.setInterval(() => setSnake((current) => { const head = current[0]; const next = { x: (head.x + direction.x + size) % size, y: (head.y + direction.y + size) % size }; if (current.some((part) => part.x === next.x && part.y === next.y)) { setRunning(false); return current; } const updated = [next, ...current]; if (next.x === food.x && next.y === food.y) { setScore((value) => value + 10); setFood(makeFood(updated)); } else updated.pop(); return updated; }), 130); return () => window.clearInterval(id); }, [direction, food, running]);
  return <main className="game-page snake-page"><header className="game-topbar"><a href="/">← ARCADE</a><h1>NEON SNAKE</h1><button onClick={() => setRunning((value) => !value)}>{running ? "II PAUSE" : "▶ PLAY"}</button></header><div className="game-layout"><section className="snake-board" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>{Array.from({ length: size * size }, (_, index) => { const x = index % size; const y = Math.floor(index / size); const isSnake = snake.some((part) => part.x === x && part.y === y); const isFood = food.x === x && food.y === y; return <span key={index} className={isFood ? "snake-cell food" : isSnake ? "snake-cell snake" : "snake-cell"} />; })}</section><aside className="game-sidebar"><h2>STATS</h2><p>SCORE <b>{score}</b></p><p>LEVEL <b>{Math.floor(score / 100) + 1}</b></p><p>Use arrow keys or WASD.</p></aside></div></main>;
}
