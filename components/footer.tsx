import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/enerbat_rgb.svg" alt="Enerbat" width={140} height={45} className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Energías sin límites. Soluciones de baterías de alta calidad para todas tus necesidades.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#empresa" className="text-muted-foreground transition-colors hover:text-primary">
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-muted-foreground transition-colors hover:text-primary">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-muted-foreground transition-colors hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Productos</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Baterías para Autos</li>
              <li className="text-muted-foreground">Baterías para Motos</li>
              <li className="text-muted-foreground">Ciclado Profundo</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Av Eliseo Canton 1870 Cordoba, Cordoba.</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/543514890900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  (0351) 489 0900
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hola@oechsle.com.ar"
                  className="transition-colors hover:text-primary"
                >
                  hola@oechsle.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enerbat. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}