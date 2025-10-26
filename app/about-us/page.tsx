import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Globe, Shield, Users, TrendingUp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us - Himalayan Re | Vision, Mission & Values",
  description:
    "Learn about Himalayan Re's vision, mission, and commitment to excellence in reinsurance services across Nepal and beyond.",
}

const features = [
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Strategic partnerships and presence across international markets to serve clients worldwide.",
  },
  {
    icon: Shield,
    title: "Robust Capital Structure",
    description: "Strong financial foundation ensuring stability and reliability for our partners.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with deep industry knowledge and technical expertise.",
  },
  {
    icon: TrendingUp,
    title: "Risk Management",
    description: "Advanced risk assessment and management solutions tailored to your needs.",
  },
]

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl text-balance">About Himalayan Re</h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Leading the way in reinsurance excellence with integrity, innovation, and unwavering commitment to our
              partners
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Card className="border-border">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-serif">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted and preferred reinsurance partner in Nepal and the region, recognized for our
                  financial strength, innovative solutions, and commitment to sustainable growth. We envision a future
                  where every insurance company has access to world-class reinsurance support that enables them to serve
                  their communities with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-serif">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide comprehensive, reliable, and innovative reinsurance solutions that empower our partners to
                  grow their businesses while managing risk effectively. We are committed to maintaining the highest
                  standards of financial stability, operational excellence, and customer service while contributing to
                  the development of Nepal's insurance industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Established over 15 years ago, Himalayan Re has grown from a local reinsurance provider to a regional
              leader in the industry. Our journey has been marked by consistent growth, strategic partnerships, and an
              unwavering commitment to excellence.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Today, we serve over 200 insurance partners across Nepal, managing assets worth over NPR 5 billion and
              maintaining a client satisfaction rate of 98%. Our success is built on the foundation of trust, expertise,
              and a deep understanding of the unique challenges facing the insurance industry in our region.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">What Sets Us Apart</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl text-balance">
              Learn More About Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced team driving our vision forward
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/team">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/message-from-ceo">CEO Message</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
