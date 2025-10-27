import Hero from "@/components/home/hero"
import Partners from "@/components/home/partners"
import Features from "@/components/home/features"
import Achievements from "@/components/home/achievements"
import ContactSnippet from "@/components/home/contact-snippet"

export const metadata = {
  title: "Himalayan Re - Global Reinsurer | Nepal Reinsurance Company",
  description:
    "Leading reinsurance company in Nepal providing comprehensive reinsurance solutions with robust capital structure and global expansion.",
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Partners />
      <Features />
      <Achievements />
      <ContactSnippet />
    </main>
  )
}
