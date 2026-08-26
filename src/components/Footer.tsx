import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto space-y-4 pb-2">
      <Separator />
      <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>ARCADE · Browser games built for a quick break.</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <a
            href="https://goberly.com/impressum"
            className="transition-colors hover:text-foreground"
          >
            Imprint
          </a>
          <a
            href="https://github.com/KingIronMan2011/arcade-website"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <FaGithub className="size-3.5" />
            Source code
          </a>
        </div>
      </div>
    </footer>
  );
}
