import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-18 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/enerbat_rgb.svg" alt="Enerbat" width={180} height={90} className="h-28 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/#empresa" className="text-base font-medium transition-colors hover:text-primary">
            Empresa
          </Link>
          <Link href="/productos" className="text-base font-medium transition-colors hover:text-primary">
            Productos
          </Link>
          <Link href="/#contacto" className="text-base font-medium transition-colors hover:text-primary">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}