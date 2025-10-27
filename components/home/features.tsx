import { Globe, Shield, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    id: 1,
    title: "Global Expansion",
    description: "Strategic partnerships and presence across international markets to serve clients worldwide.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Robust Capital Structure",
    description: "Strong financial foundation ensuring stability and reliability for our partners.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Expert Team",
    description: "Experienced professionals with deep industry knowledge and technical expertise.",
    icon: Users,
  },
  {
    id: 4,
    title: "Risk Management",
    description: "Advanced risk assessment and management solutions tailored to your needs.",
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">Why Choose Himalayan Re</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in reinsurance with unmatched expertise and commitment
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.id} className="border-border hover:shadow-lg transition-shadow">
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
  )
}
