import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CalendarIcon, Heart, ArrowRight } from "lucide-react"
import { updates } from "@/lib/mock-data"

const categories = [
  {
    title: "Notices",
    description: "Official announcements, AGM notices, and regulatory updates",
    icon: Bell,
    href: "/updates/notices",
    count: updates.notices.length,
  },
  {
    title: "Events",
    description: "Upcoming events, conferences, and industry participation",
    icon: CalendarIcon,
    href: "/updates/events",
    count: updates.events.length,
  },
  {
    title: "CSR Activities",
    description: "Corporate social responsibility initiatives and community programs",
    icon: Heart,
    href: "/updates/csr",
    count: updates.csr.length,
  },
]

export const metadata = {
  title: "Updates - Himalayan Re | News, Notices & Events",
  description: "Stay updated with the latest news, notices, events, and CSR activities from Himalayan Re.",
}

export default function UpdatePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white font-serif sm:text-5xl">Updates & News</h1>
            <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed with our latest announcements, events, and corporate social responsibility initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.title} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="rounded-full bg-primary/10 p-4 w-fit mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{category.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{category.count} Updates</span>
                      <Button asChild variant="ghost">
                        <Link href={category.href}>
                          View All
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground font-serif mb-12 text-center">Recent Updates</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            {[...updates.notices.slice(0, 2), ...updates.events.slice(0, 1), ...updates.csr.slice(0, 1)].map(
              (update) => (
                <Card key={update.id} className="border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground mb-2 capitalize">{update.category}</div>
                        <CardTitle className="text-lg font-serif mb-2">{update.title}</CardTitle>
                        <CardDescription className="text-base">{update.excerpt}</CardDescription>
                        <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{new Date(update.publishedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
