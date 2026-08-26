import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Terms of Service",
  description: "Terms for using Arcade.",
};

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-background px-4 py-8 sm:px-8">
      <article className="mx-auto max-w-3xl space-y-6">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost" }), "-ml-2")}
        >
          ← Back to Arcade
        </Link>
        <Card>
          <CardHeader className="space-y-3">
            <Badge variant="outline">LEGAL</Badge>
            <CardTitle className="font-heading text-3xl">
              Terms of Service
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Last updated: 26 August 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-6 text-muted-foreground">
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Using Arcade
              </h2>
              <p>
                Arcade is provided for personal entertainment. Use the site
                lawfully and do not attempt to disrupt, damage, or gain
                unauthorized access to it.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Availability
              </h2>
              <p>
                The games are provided as available. Features can change, be
                interrupted, or be removed without notice.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                External links
              </h2>
              <p>
                Links to third-party sites, including the source repository and
                Imprint, are governed by those sites&apos; own terms and privacy
                practices.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Contact
              </h2>
              <p>
                The Imprint contains the operator and contact information for
                this site.
              </p>
            </section>
          </CardContent>
        </Card>
      </article>
    </main>
  );
}
