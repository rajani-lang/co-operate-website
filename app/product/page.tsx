"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { Building2, Wrench, Ship, Car, Plane, Leaf, ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { products } from "@/lib/mock-data"

const iconMap = {
  building: Building2,
  wrench: Wrench,
  ship: Ship,
  car: Car,
  plane: Plane,
  leaf: Leaf,
}

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl text-balance">
              Our Reinsurance Products
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive reinsurance solutions tailored to meet the diverse needs of insurance companies across
              multiple sectors
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product: { icon: string; id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => {
              const Icon = iconMap[product.icon as keyof typeof iconMap]
              return (
                <Card
                  key={product.id}
                  className="border-border hover:shadow-lg transition-all cursor-pointer group"
                
                >
                  <CardHeader>
                    <div className="rounded-full bg-primary/10 p-4 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full group-hover:bg-accent/10">
                      Learn More
                      <ChevronDown className="ml-2 h-4 w-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    {(() => {
                      const Icon = iconMap[selectedProduct.icon as keyof typeof iconMap]
                      return <Icon className="h-6 w-6 text-primary" />
                    })()}
                  </div>
                  <DialogTitle className="text-2xl font-serif">{selectedProduct.name}</DialogTitle>
                </div>
                <DialogDescription className="text-base leading-relaxed">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-3">Product Details</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProduct.details}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <Button onClick={() => setSelectedProduct(null)}>Contact Us for Quote</Button>
                <Button variant="outline" onClick={() => setSelectedProduct(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl text-balance">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team can work with you to develop tailored reinsurance solutions that meet your specific needs
            </p>
            <div className="mt-8">
              <Button size="lg">Get in Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
