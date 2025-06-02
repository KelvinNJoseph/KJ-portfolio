"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/blog" },
]

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <h1 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-100">
              Portfolio
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6" aria-label="Primary">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </section>
      </header>

      {/* Fullscreen Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md px-6 py-8 flex flex-col space-y-6 md:hidden"
          aria-label="Mobile"
        >
          {/* Close Button Top Right */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start space-y-6 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-xl font-semibold"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-10 flex space-x-6">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}

export default Header
