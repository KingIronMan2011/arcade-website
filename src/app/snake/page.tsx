"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Point = { x: number; y: number };
const size = 20;
const initialSnake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];
const makeFood = (snake: Point[]) => {
  let food: Point;
  do
    food = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    };
  while (snake.some((part) => part.x === food.x && part.y === food.y));
  return food;
};

export default function SnakePage() {
  const [snake, setSnake] = useState<Point[]>(initialSnake);
  const [food, setFood] = useState<Point>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const level = Math.floor(score / 100) + 1;
  const steer = (next: Point) => {
    if (next.x + direction.x !== 0 || next.y + direction.y !== 0)
      setDirection(next);
    setRunning(true);
  };
  const reset = () => {
    setSnake(initialSnake);
    setFood({ x: 15, y: 10 });
    setDirection({ x: 1, y: 0 });
    setScore(0);
    setRunning(false);
  };
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const moves: Record<string, Point> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      if (moves[event.key]) {
        event.preventDefault();
        steer(moves[event.key]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [direction]);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(
      () =>
        setSnake((current) => {
          const head = current[0];
          const next = {
            x: (head.x + direction.x + size) % size,
            y: (head.y + direction.y + size) % size,
          };
          if (current.some((part) => part.x === next.x && part.y === next.y)) {
            setRunning(false);
            return current;
          }
          const updated = [next, ...current];
          if (next.x === food.x && next.y === food.y) {
            setScore((value) => value + 10);
            setFood(makeFood(updated));
          } else updated.pop();
          return updated;
        }),
      Math.max(70, 145 - level * 8),
    );
    return () => window.clearInterval(id);
  }, [direction, food, level, running]);
  return (
    <main className="flex min-h-dvh bg-background px-4 py-5 sm:px-8 sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-7">
        <Header
          rightSlot={
            <Badge variant={running ? "default" : "outline"}>
              {running ? "RUN IN PROGRESS" : "READY"}
            </Badge>
          }
        />
        <section className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium text-primary">ARCADE / 01</p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Neon Snake
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep moving. The walls are not the danger.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={reset}>
              <RotateCcw />
              Reset
            </Button>
            <Button onClick={() => setRunning((value) => !value)}>
              {running ? <Pause /> : <Play />}
              {running ? "Pause" : "Play"}
            </Button>
          </div>
        </section>
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
          <Card className="border-border/70">
            <CardContent className="p-3 sm:p-5">
              <div className="relative mx-auto aspect-square max-w-160 overflow-hidden rounded-md border border-border bg-muted/30 p-1">
                <div
                  className="grid size-full"
                  style={{
                    gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${size}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: size * size }, (_, index) => {
                    const x = index % size;
                    const y = Math.floor(index / size);
                    const isHead = snake[0].x === x && snake[0].y === y;
                    const isSnake = snake.some(
                      (part) => part.x === x && part.y === y,
                    );
                    const isFood = food.x === x && food.y === y;
                    return (
                      <span
                        key={index}
                        className={
                          isFood
                            ? "m-px rounded-xs bg-rose-400 shadow-[0_0_12px_rgb(251_113_133)]"
                            : isHead
                              ? "m-px rounded-xs bg-emerald-200 shadow-[0_0_14px_rgb(52_211_153)]"
                              : isSnake
                                ? "m-px rounded-xs bg-emerald-500"
                                : "m-px rounded-xs bg-background/35"
                        }
                      />
                    );
                  })}
                </div>
                {!running && (
                  <button
                    onClick={() => setRunning(true)}
                    className="absolute inset-0 grid place-items-center bg-background/55 text-sm font-medium backdrop-blur-[1px]"
                  >
                    {score
                      ? "Paused — click to continue"
                      : "Click the board or use arrow keys to start"}
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xs text-muted-foreground">
                  RUN STATS
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                <Stat label="Score" value={score} />
                <Stat label="Level" value={level} />
                <Stat label="Length" value={snake.length} />
                <Stat label="Status" value={running ? "Live" : "Idle"} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs text-muted-foreground">
                  CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs leading-5 text-muted-foreground">
                  Arrow keys or WASD move the snake. Walls wrap around the
                  board.
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  <span />
                  <Button
                    size="icon-sm"
                    variant="outline"
                    onClick={() => steer({ x: 0, y: -1 })}
                  >
                    <ArrowUp />
                  </Button>
                  <span />
                  <Button
                    size="icon-sm"
                    variant="outline"
                    onClick={() => steer({ x: -1, y: 0 })}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="outline"
                    onClick={() => steer({ x: 0, y: 1 })}
                  >
                    <ArrowDown />
                  </Button>
                  <Button
                    size="icon-sm"
                    variant="outline"
                    onClick={() => steer({ x: 1, y: 0 })}
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </section>
        <Footer />
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-md border border-border bg-muted/30 p-2.5">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-heading text-lg font-semibold">{value}</p>
    </div>
  );
}
