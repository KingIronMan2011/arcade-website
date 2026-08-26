import Link from "next/link";
import { ArrowLeft, Compass, Gamepad2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-background p-4">
      <Card className="w-full max-w-lg border-primary/20 bg-card shadow-xl shadow-primary/5">
        <CardHeader className="items-center text-center">
          <div className="mb-2 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Compass className="size-6" />
          </div>
          <Badge variant="outline">ERROR 404</Badge>
          <CardTitle className="mt-3 font-heading text-2xl">
            This level does not exist.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 text-center">
          <p className="text-sm leading-6 text-muted-foreground">
            The route you tried is missing, moved, or never made it past the
            loading screen.
          </p>
          <div className="rounded-lg border border-border bg-muted/40 p-3 text-left text-xs text-muted-foreground">
            <span className="text-primary">arcade@system:~$</span> route not
            found
          </div>
        </CardContent>
        <CardFooter className="grid gap-2 sm:grid-cols-2">
          <Link href="/" className={cn(buttonVariants(), "w-full")}>
            <ArrowLeft />
            Back to arcade
          </Link>
          <Link
            href="/snake"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            <Gamepad2 />
            Play Snake
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
