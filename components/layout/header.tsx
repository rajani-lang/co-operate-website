"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about-us",
    submenu: [
      { name: "Vision & Mission", href: "/about-us#vision" },
      { name: "Message from CEO", href: "/message-from-ceo" },
      { name: "Message from Chairman", href: "/message-from-chairman" },
    ],
  },
  { name: "Products", href: "/product" },
  {
    name: "Reports",
    href: "/report",
    submenu: [
      { name: "Annual Reports", href: "/reports/annual" },
      { name: "Quarterly Reports", href: "/reports/quarterly" },
      { name: "Financial Highlights", href: "/reports/financial-highlight" },
    ],
  },
  { name: "Updates", href: "/update" },
  { name: "Team", href: "/team" },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact-us" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">Himalayan Re</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border border-border rounded-md shadow-lg">
                  <div className="py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact-us">Get in Touch</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/60 hover:bg-accent hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
