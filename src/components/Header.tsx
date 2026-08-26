import type { ReactNode } from "react";
import Link from "next/link";

type SiteHeaderProps = { rightSlot?: ReactNode };

export function Header({ rightSlot }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Link
        href="/"
        className="font-heading text-sm font-semibold tracking-tight"
      >
        ARCADE
      </Link>
      {rightSlot}
    </header>
  );
}
