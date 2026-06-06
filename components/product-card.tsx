import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative overflow-hidden bg-muted h-40">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-3">
        <Badge variant="secondary" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
        {product.denominación && (
          <p className="text-muted-foreground text-xs">{product.denominación}</p>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 text-muted-foreground p-3 pt-0 text-xs">
        {product.CCA && <span>CCA: {product.CCA}</span>}
        {product.CapacidadAH && <span>AH: {product.CapacidadAH}</span>}
        {product.C10 && <span>C10: {product.C10}</span>}
      </CardFooter>
    </Card>
  )
}