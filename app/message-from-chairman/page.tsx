import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Message from Chairman - Himalayan Re",
  description: "Read the message from our Chairman about our strategic direction and commitment to stakeholders.",
}

export default function MessageFromChairmanPage() {
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
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Message from the Chairman</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-shrink-0">
              <Image
                src="/professional-business-portrait.png"
                alt="Chairman"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Krishna Bahadur Thapa</h2>
              <p className="text-lg text-muted-foreground mb-4">Chairman, Board of Directors</p>
              <p className="text-muted-foreground">Appointed: March 1, 2018</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Dear Shareholders, Partners, and Stakeholders,
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              On behalf of the Board of Directors, I am pleased to share with you our continued progress and strategic
              vision for Himalayan Re. As we reflect on our journey and look toward the future, I am filled with
              confidence in our ability to deliver sustainable value to all our stakeholders.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              The reinsurance sector in Nepal has witnessed significant transformation in recent years, and Himalayan Re
              has been at the forefront of this evolution. Our strong governance framework, prudent risk management
              practices, and commitment to transparency have established us as a pillar of stability in the market. With
              assets under management exceeding NPR 5 billion and a growing portfolio of over 200 partner companies, we
              have demonstrated our capacity to deliver consistent results while maintaining the highest standards of
              corporate governance.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Our Board remains committed to strategic oversight that balances growth with sustainability. We have
              invested significantly in strengthening our capital base, enhancing our technological infrastructure, and
              developing our human capital. These investments position us well to capitalize on emerging opportunities
              while navigating the challenges of an increasingly complex risk landscape.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Corporate responsibility is central to our mission. We recognize that our success is intertwined with the
              prosperity of the communities we serve. Through our various corporate social responsibility initiatives,
              we are contributing to education, disaster preparedness, and economic development across Nepal. This
              commitment to social impact is not just the right thing to do – it is essential to building long-term,
              sustainable value.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              Looking ahead, we see tremendous potential for growth in both our domestic market and the broader South
              Asian region. The Board has approved a strategic expansion plan that will see us deepen our product
              offerings, explore new market segments, and strengthen our international partnerships. We are confident
              that these initiatives will drive value creation for our shareholders while better serving the needs of
              our insurance partners.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              I would like to express my deep appreciation to our management team and employees for their dedication and
              professionalism. To our shareholders, thank you for your continued confidence in our vision. And to our
              partners and clients, we are honored by your trust and committed to earning it every day through
              excellence in service and integrity in all our dealings.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              As we continue this journey together, I am optimistic about what we can achieve. With strong governance,
              strategic focus, and unwavering commitment to our values, Himalayan Re is well-positioned to create
              lasting value for all stakeholders.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-2">Sincerely,</p>
            <p className="text-xl font-semibold text-foreground">Krishna Bahadur Thapa</p>
            <p className="text-muted-foreground">Chairman, Board of Directors</p>
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
