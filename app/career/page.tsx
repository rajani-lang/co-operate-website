import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Careers - Himalayan Re | Join Our Team",
  description: "Explore career opportunities at Himalayan Re and join our team of professionals.",
}

const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with experienced professionals in a supportive team atmosphere",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Opportunities for professional development and career advancement",
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description: "Comprehensive compensation and benefits package",
  },
  {
    icon: Briefcase,
    title: "Industry Leadership",
    description: "Be part of Nepal's leading reinsurance company",
  },
]

export default function CareerPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Careers at Himalayan Re</h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our team of professionals and build a rewarding career in reinsurance
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardContent className="pt-8 text-center">
              <div className="rounded-full bg-muted p-4 w-fit mx-auto mb-6">
                <Briefcase className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Currently Not Recruiting</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We are not actively recruiting at this time. However, we are always interested in connecting with
                talented professionals. Please check back regularly for future opportunities or send us your resume for
                future consideration.
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact-us">Send Your Resume</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">Why Join Himalayan Re?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Build your career with Nepal's leading reinsurance company
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="border-border">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
