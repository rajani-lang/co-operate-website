import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/lib/mock-data"

export const metadata = {
  title: "FAQs - Himalayan Re | Frequently Asked Questions",
  description: "Find answers to commonly asked questions about Himalayan Re and our reinsurance services.",
}

export default function FAQsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and operations
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground font-serif">Still Have Questions?</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Our team is here to help. Contact us for more information about our services.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
