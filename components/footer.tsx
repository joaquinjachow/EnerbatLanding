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
              <Image src="/enerbat_rgb.svg" alt="Enerbat" width={100} height={32} className="h-16 w-auto" />
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
                <Link href="#empresa" className="text-muted-foreground transition-colors hover:text-primary">
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-muted-foreground transition-colors hover:text-primary">
                  Productos
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
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@enerbat.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enerbat. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}