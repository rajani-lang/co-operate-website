export const metadata = {
  title: "Privacy Policy - Himalayan Re",
  description: "Privacy policy for Himalayan Re website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
            <p className="text-foreground leading-relaxed">
              Himalayan Re is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your personal information.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-foreground leading-relaxed">
              We collect information that you provide directly to us, including name, email address, phone number, and
              any other information you choose to provide when contacting us or using our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-foreground leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, communicate with you,
              and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at info@himalayanre.com.np
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
