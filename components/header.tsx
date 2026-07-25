import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-18 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/enerbat_rgb.svg" alt="Enerbat" width={180} height={90} className="h-28 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="text-base font-medium transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}