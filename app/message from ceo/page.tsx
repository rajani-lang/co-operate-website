import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Message from CEO - Himalayan Re",
  description: "Read the message from our Chief Executive Officer about our vision and commitment to excellence.",
}

export default function MessageFromCEOPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="text-white hover:text-white/80 mb-6">
            <Link href="/about-us">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to About Us
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Message from the CEO</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0">
              <Image
                src="/executive-portrait.png"
                alt="Rajesh Sharma, CEO"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Rajesh Sharma</h2>
              <p className="text-lg text-muted-foreground mb-4">Chief Executive Officer</p>
              <p className="text-muted-foreground">Appointed: January 15, 2020</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">Dear Valued Partners and Stakeholders,</p>

            <p className="text-foreground leading-relaxed mb-6">
              It is with great pride and gratitude that I address you as the Chief Executive Officer of Himalayan Re.
              Over the past 15 years, we have built a reputation as Nepal's most trusted reinsurance partner, and this
              achievement would not have been possible without your continued trust and support.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              The reinsurance industry plays a critical role in the stability and growth of the broader insurance
              sector. At Himalayan Re, we understand this responsibility deeply. Our commitment goes beyond providing
              financial backing – we strive to be a true partner in your success, offering expertise, innovation, and
              unwavering support through every challenge and opportunity.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              In an ever-changing global landscape, marked by emerging risks and evolving market dynamics, we have
              remained steadfast in our mission to deliver comprehensive, reliable, and innovative reinsurance
              solutions. Our robust capital structure, combined with our team's deep industry expertise, positions us
              uniquely to support your growth ambitions while effectively managing risk.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Looking ahead, we are excited about the opportunities that lie before us. We are committed to expanding
              our product offerings, strengthening our technological capabilities, and deepening our partnerships across
              the region. Our vision is to not only be the preferred reinsurance partner in Nepal but to set new
              standards of excellence that resonate throughout South Asia.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              I want to express my sincere appreciation to our dedicated team, whose expertise and commitment drive our
              success every day. To our partners and clients, thank you for placing your trust in us. Together, we will
              continue to build a stronger, more resilient insurance ecosystem that serves our communities and
              contributes to Nepal's economic development.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              As we move forward, I invite you to join us on this journey of growth and excellence. Whether you are a
              current partner or considering a relationship with Himalayan Re, we are here to support your success with
              integrity, innovation, and unwavering commitment.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-2">With warm regards,</p>
            <p className="text-xl font-semibold text-foreground">Rajesh Sharma</p>
            <p className="text-muted-foreground">Chief Executive Officer</p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact-us">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/report">View Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
