import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { productosDestacadosData } from "@/lib/products"
import { Battery, Zap, Shield, Award, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-12 md:py-20">
        <div className="container max-w-7xl mx-auto relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
              <Zap className="h-4 w-4 text-primary" />
              <span>Energías sin límites</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-6xl">
              Potencia y confiabilidad para tu vehículo
            </h1>
            <p className="mb-6 text-lg text-muted-foreground text-pretty leading-relaxed">
              Baterías de alta calidad para autos, motos y aplicaciones de ciclado profundo. Tecnología avanzada que
              garantiza rendimiento superior.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="gap-2">
                <Link href="/productos">
                  Ver Productos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/2 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Battery className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Alta Capacidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Baterías diseñadas para ofrecer máxima capacidad de arranque y durabilidad excepcional.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Tecnología Avanzada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos las últimas tecnologías en calcio y silver graphite para mejor rendimiento.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Garantía de Calidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Productos certificados con garantía extendida y soporte técnico especializado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="empresa" className="bg-muted/30 py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Nuestra Empresa</h2>
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
              En Enerbat, comercializamos una amplia variedad de baterías para satisfacer todas sus necesidades en cuanto a almacenamiento y suministro de energía. Nuestros productos están diseñados para ofrecer máxima eficiencia y durabilidad, garantizando un rendimiento confiable en cada aplicación.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Modelos disponibles</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Garantía de calidad</div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Productos Destacados</h2>
            <p className="text-lg text-muted-foreground">Descubre nuestra selección de baterías más populares</p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {productosDestacadosData.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/productos">
                Ver Todos los Productos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contacto" className="bg-muted/30 py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Contacto</h2>
              <p className="text-lg text-muted-foreground">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+54 11 1234-5678</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">info@enerbat.com</p>
                      <p className="text-sm text-muted-foreground">ventas@enerbat.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Ubicación</h3>
                      <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
                      <p className="text-sm text-muted-foreground">Zona Industrial</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="p-5">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Nombre" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input placeholder="Teléfono" />
                    </div>
                    <div>
                      <Textarea placeholder="Mensaje" rows={4} />
                    </div>
                    <Button className="w-full">Enviar Mensaje</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}