import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Arcade.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Last updated: 26 August 2026
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-6 text-muted-foreground">
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                What this site stores
              </h2>
              <p>
                Arcade does not require an account. The site may store your
                selected color theme in your browser&apos;s local storage so it
                can keep that preference on your next visit.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Analytics and advertising
              </h2>
              <p>
                The application does not include advertising or third-party
                analytics scripts.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Technical data
              </h2>
              <p>
                When you visit a website, hosting infrastructure can process
                technical request data such as IP address, browser information,
                and server logs. The operator details are available on the{" "}
                <a
                  href="https://goberly.com/impressum"
                  className="text-primary underline underline-offset-4"
                >
                  Imprint
                </a>{" "}
                page.
              </p>
            </section>
            <Separator />
            <section>
              <h2 className="mb-2 font-heading text-base text-foreground">
                Questions
              </h2>
              <p>
                Use the contact details in the Imprint for privacy-related
                requests.
              </p>
            </section>
          </CardContent>
        </Card>
      </article>
    </main>
  );
}
