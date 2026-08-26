"use client";

import { useEffect, useState } from "react";
import {
  Activity,
  CircleDot,
  Copy,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function HackerPage() {
  const [keys, setKeys] = useState(0);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();
      setKeys((value) => value + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  const progress = Math.min(100, keys);
  const logs = Array.from(
    { length: Math.min(16, Math.max(3, keys)) },
    (_, index) =>
      `[${String(index + 1).padStart(3, "0")}] packet accepted · route encrypted · node_${(index % 6) + 1}`,
  );
  return (
    <main className="flex min-h-dvh bg-background px-4 py-5 sm:px-8 sm:py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-7">
        <Header
          rightSlot={
            <Badge variant={progress === 100 ? "default" : "outline"}>
              {progress === 100 ? "ACCESS GRANTED" : "SESSION ACTIVE"}
            </Badge>
          }
        />
        <section className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium text-primary">ARCADE / 03</p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Hacker Typer
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Type anything. The terminal will take care of the rest.
            </p>
          </div>
          <Badge variant="secondary" className="gap-1.5">
            <CircleDot className="size-3 text-emerald-500" />
            BLACKBOX ONLINE
          </Badge>
        </section>
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px]">
          <Card className="overflow-hidden border-zinc-800 bg-zinc-950 text-zinc-100 shadow-xl shadow-emerald-500/5">
            <CardHeader className="border-b border-zinc-800 bg-zinc-900/60">
              <CardTitle className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                <Terminal className="size-3.5" />
                root@blackbox:~$
              </CardTitle>
            </CardHeader>
            <CardContent className="min-h-110 space-y-1 p-5 font-mono text-xs leading-6 text-emerald-300">
              <p className="text-emerald-500">
                Initializing terminal session...
              </p>
              <p className="text-zinc-400">
                Target acquired. Type to begin the sequence.
              </p>
              <div className="pt-3">
                {logs.map((log) => (
                  <p key={log}>{log}</p>
                ))}
              </div>
              <p className="pt-2 text-emerald-400">
                root@blackbox:~${" "}
                <span className="inline-block h-3 w-1.5 animate-pulse bg-emerald-400 align-middle" />
              </p>
            </CardContent>
          </Card>
          <aside className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Activity className="size-3.5" />
                  INTRUSION PROGRESS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={progress} />
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">
                    {progress}% complete
                  </span>
                  <span className="font-medium">{keys} keys</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xs text-muted-foreground">
                  SESSION STATUS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <Status icon={Wifi} label="Route" value="Encrypted" />
                <Status icon={ShieldCheck} label="Firewall" value="Bypassed" />
                <Status
                  icon={Copy}
                  label="Payloads"
                  value={String(Math.floor(keys / 4))}
                />
              </CardContent>
            </Card>
            <p className="px-1 text-xs leading-5 text-muted-foreground">
              Type anywhere on this page to advance the session.
            </p>
          </aside>
        </section>
        <Footer />
      </div>
    </main>
  );
}

function Status({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wifi;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-3.5" />
        {label}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
