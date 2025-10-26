export const metadata = {
  title: "Terms & Conditions - Himalayan Re",
  description: "Terms and conditions for using Himalayan Re website and services.",
}

export default function TermsConditionsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Terms & Conditions</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-foreground leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use License</h2>
            <p className="text-foreground leading-relaxed">
              Permission is granted to temporarily access the materials on Himalayan Re's website for personal,
              non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
            <p className="text-foreground leading-relaxed">
              The materials on Himalayan Re's website are provided on an 'as is' basis. Himalayan Re makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h2>
            <p className="text-foreground leading-relaxed">
              For questions about these Terms & Conditions, please contact us at info@himalayanre.com.np
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
