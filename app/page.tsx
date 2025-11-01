import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { productosDestacadosData } from "@/lib/products"
import { Battery, Zap, Shield, Award, ArrowRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react"
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
      <section id="contacto" className="py-6 pb-12 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl text-primary">Contacto</h2>
            <p className="text-lg text-muted-foreground">¿Tienes alguna pregunta? Estamos aquí para ayudarte</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Channels */}
            <div className="space-y-8 border-b md:border-b-0 md:border-r border-gray-200 pb-12 md:pb-0 md:pr-12">
              <div className="flex items-start gap-4">
                <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-primary">WhatsApp</h2>
                  <Button
                    asChild
                    className="mb-2 bg-accent text-accent-foreground hover:bg-accent"
                  >
                    <a href="https://wa.me/543514890900" target="_blank" rel="noopener noreferrer">
                      Chatear con nosotros
                    </a>
                  </Button>
                  <div className="text-gray-600 text-sm mb-1">(0351) 489 0900</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-primary">Teléfono</h2>
                  <div className="text-gray-600">(0351) 489 0900</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h2 className="font-semibold text-lg mb-1 text-primary">Email</h2>
                  <Button
                    asChild
                    className="mb-2 bg-accent text-accent-foreground hover:bg-accent"
                  >
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=hola@oechsle.com.ar&su=Consulta desde la web de Oechsle S.A.&body=Hola, me contacto desde la página web de Oechsle S.A. para consultar sobre:"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enviar Email
                    </a>
                  </Button>
                  <div className="text-gray-600 text-sm mb-1">hola@oechsle.com.ar</div>
                  <div className="text-gray-500 text-xs">Haz clic para enviar un email</div>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2 md:hidden" />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9zm0-11a2 2 0 110 4 2 2 0 010-4z" /></svg>
                  <div>
                    <h2 className="font-semibold text-lg mb-1 text-primary">Dónde encontrarnos</h2>
                  </div>
                </div>
                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5!2d-64.185!3d-31.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298a2b2c3d4e5%3A0x1234567890abcdef!2sAv.%20Eliseo%20Canton%201870%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md w-full h-64"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombre *</label>
                    <Input required placeholder="Tu nombre" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Empresa *</label>
                    <Input required placeholder="Nombre de tu empresa" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email *</label>
                    <Input required type="email" placeholder="tu@email.com" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Teléfono *</label>
                    <Input required placeholder="(0351) 123-4567" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Provincia *</label>
                    <select
                      required
                      className="block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-gray-900 shadow-sm focus:border-[#0419a2] focus:ring-[#0419a2] focus:outline-none focus:ring-2 transition-colors duration-200"
                    >
                      <option value="">Selecciona una provincia</option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Ríos">Entre Ríos</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="La Pampa">La Pampa</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Misiones">Misiones</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="Río Negro">Río Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                      <option value="San Luis">San Luis</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Santiago del Estero">Santiago del Estero</option>
                      <option value="Tierra del Fuego">Tierra del Fuego</option>
                      <option value="Tucumán">Tucumán</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Ciudad *</label>
                    <Input required placeholder="Ciudad" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Asunto *</label>
                  <Input required placeholder="Asunto de tu consulta" className="border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensaje *</label>
                  <Textarea required placeholder="Escribe tu mensaje aquí..." className="min-h-[120px] border-gray-300 focus:border-[#0419a2] focus:ring-[#0419a2]" />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}