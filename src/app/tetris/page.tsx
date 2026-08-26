"use client";

import { useState } from "react";
import {
  Blocks,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Play,
  RotateCcw,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TetrisPage() {
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const filled = new Set([
    176, 177, 178, 186, 187, 188, 189, 196, 197, 198, 199,
  ]);
  return (
    <main className="flex min-h-dvh bg-background px-4 py-5 sm:px-8 sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-7">
        <Header
          rightSlot={
            <Badge variant={running ? "default" : "outline"}>
              {running ? "GAME ACTIVE" : "READY"}
            </Badge>
          }
        />
        <section className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium text-primary">ARCADE / 02</p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Neon Tetris
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep the stack clean. Chase the line clear.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setScore(0)}>
              <RotateCcw />
              Reset
            </Button>
            <Button
              onClick={() => {
                setRunning(true);
                setScore((value) => value + 100);
              }}
            >
              <Play />
              Play
            </Button>
          </div>
        </section>
        <section className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
          <aside className="space-y-4">
            <Panel title="HOLD">
              <div className="grid aspect-square place-items-center rounded-md border border-dashed border-border bg-muted/30">
                <Blocks className="size-7 text-muted-foreground" />
              </div>
            </Panel>
            <Panel title="STATS">
              <div className="space-y-3 text-xs">
                <Stat label="Score" value={score} />
                <Stat label="Level" value="01" />
                <Stat label="Lines" value="00" />
              </div>
            </Panel>
          </aside>
          <Card className="border-border/70">
            <CardContent className="p-3 sm:p-5">
              <div className="mx-auto grid aspect-1/2 max-w-97.5 grid-cols-10 grid-rows-20 gap-px rounded-md border border-border bg-border p-1 shadow-inner">
                {Array.from({ length: 200 }, (_, index) => (
                  <span
                    key={index}
                    className={
                      filled.has(index)
                        ? "rounded-sm bg-cyan-400 shadow-[0_0_8px_rgb(34_211_238)]"
                        : "rounded-sm bg-background/70"
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          <aside className="space-y-4">
            <Panel title="NEXT">
              <div className="grid aspect-square place-items-center rounded-md border border-dashed border-border bg-muted/30">
                <div className="grid grid-cols-2 gap-1">
                  <i className="size-4 rounded-sm bg-violet-400" />
                  <i className="size-4 rounded-sm bg-violet-400" />
                  <i className="size-4 rounded-sm bg-violet-400" />
                  <i className="size-4 rounded-sm bg-violet-400" />
                </div>
              </div>
            </Panel>
            <Panel title="CONTROLS">
              <p className="mb-3 text-xs leading-5 text-muted-foreground">
                Use arrow keys to move and rotate. Space drops the piece.
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                <span />
                <Button size="icon-sm" variant="outline">
                  <ChevronUp />
                </Button>
                <span />
                <Button size="icon-sm" variant="outline">
                  <ChevronLeft />
                </Button>
                <Button size="icon-sm" variant="outline">
                  <ChevronDown />
                </Button>
                <Button size="icon-sm" variant="outline">
                  <ChevronRight />
                </Button>
              </div>
            </Panel>
          </aside>
        </section>
        <Footer />
      </div>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xs text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
      <span className="text-muted-foreground">{label}</span>
      <strong className="font-heading">{value}</strong>
    </div>
  );
}
