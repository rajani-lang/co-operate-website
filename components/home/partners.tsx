import Image from "next/image"
import { partners } from "@/lib/mock-data"

export default function Partners() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground font-serif">Trusted by Leading Insurance Companies</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We partner with top insurance providers across Nepal and the region
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
