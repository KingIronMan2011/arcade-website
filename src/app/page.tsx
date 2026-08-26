import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Gamepad2,
  Terminal,
  Trophy,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";

const games = [
  {
    href: "/snake",
    name: "Neon Snake",
    description: "Wrap the board, chase the food, and keep the run alive.",
    icon: Gamepad2,
    accent: "text-emerald-400",
    surface: "bg-emerald-500/10 ring-emerald-500/25",
  },
  {
    href: "/tetris",
    name: "Neon Tetris",
    description: "Drop glowing blocks and keep the board under control.",
    icon: Blocks,
    accent: "text-cyan-400",
    surface: "bg-cyan-500/10 ring-cyan-500/25",
  },
  {
    href: "/hacker",
    name: "Hacker Typer",
    description: "Turn any keyboard into a suspicious-looking terminal.",
    icon: Terminal,
    accent: "text-lime-400",
    surface: "bg-lime-500/10 ring-lime-500/25",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-dvh bg-background px-4 py-5 sm:px-8 sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10">
        <Header
          rightSlot={
            <Badge variant="outline" className="hidden sm:inline-flex">
              3 GAMES ONLINE
            </Badge>
          }
        />
        <section className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div className="space-y-5">
            <Badge className="gap-1.5">
              <span className="size-1.5 rounded-full bg-primary-foreground" />
              PLAY IN YOUR BROWSER
            </Badge>
            <div className="space-y-3">
              <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
                Pick a game.{" "}
                <span className="text-primary">Break your record.</span>
              </h1>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                A small collection of neon browser games with no account, no
                download, and no waiting around.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1.5">
                <Trophy className="size-3" />
                Keyboard-first
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1.5">
                <Zap className="size-3" />
                Instant play
              </span>
            </div>
          </div>
          <Card className="border-primary/20 bg-primary/5 shadow-none">
            <CardHeader>
              <CardTitle className="text-xs font-medium text-muted-foreground">
                NOW PLAYING
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-heading text-xl font-semibold">
                Choose your challenge
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
                Every game starts with a single click. Your next high score is
                waiting.
              </p>
            </CardContent>
          </Card>
        </section>
        <section aria-labelledby="games-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2
              id="games-heading"
              className="font-heading text-lg font-semibold"
            >
              Games
            </h2>
            <span className="text-xs text-muted-foreground">
              SELECT ONE TO START
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {games.map((game) => {
              const Icon = game.icon;
              return (
                <Card
                  key={game.href}
                  className="group border-border/70 bg-card transition duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardHeader className="gap-4">
                    <div
                      className={cn(
                        "grid size-11 place-items-center rounded-xl ring-1",
                        game.surface,
                      )}
                    >
                      <Icon className={cn("size-5", game.accent)} />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle>{game.name}</CardTitle>
                      <Badge variant="secondary">READY</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="min-h-10 text-xs leading-5 text-muted-foreground">
                      {game.description}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Link
                      href={game.href}
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full justify-between group-hover:border-primary/50 group-hover:bg-primary/5",
                      )}
                    >
                      Play now{" "}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
