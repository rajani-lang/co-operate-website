import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/20">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>Trusted by 200+ Insurance Partners Across Nepal</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            Global Reinsurer
          </h1>

          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
            Nepal's leading reinsurance company providing comprehensive solutions with robust capital structure and
            global expansion. Securing your future with trust and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
              <Link href="/contact-us">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-base px-8"
            >
              <Link href="/product">Explore Products</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">15+</div>
              <div className="mt-2 text-sm text-white/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">NPR 5B+</div>
              <div className="mt-2 text-sm text-white/80">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">200+</div>
              <div className="mt-2 text-sm text-white/80">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">98%</div>
              <div className="mt-2 text-sm text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
