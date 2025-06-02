"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  const navItems: NavItem[] = [
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "About", href: "#about" },
  ]

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-slate-900/20"
          : "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900",
      )}
      role="banner"
    >
      {/* Visual effects with reduced performance impact */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - wrapped in nav for semantic correctness */}
          <nav aria-label="Main">
            <Link 
              href="/" 
              className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                  <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                Portfolio
              </span>
            </Link>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 lg:px-6 py-2 lg:py-3 text-slate-300 hover:text-white transition-all duration-300 group focus-visible:outline-none"
              >
                <span className="relative z-10 font-medium text-sm lg:text-base">
                  {item.name}
                </span>
                <div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Social Links */}
            <nav className="hidden sm:flex items-center space-x-2" aria-label="Social">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-9 h-9 lg:w-10 lg:h-10 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors duration-300"
              >
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub (opens in new tab)"
                >
                  <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="w-9 h-9 lg:w-10 lg:h-10 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors duration-300"
              >
                <Link 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
          aria-label="Mobile"
        >
          <div className="py-4 space-y-2 border-t border-slate-800/50">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/30 rounded-lg transition-colors duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 px-4 pt-4 border-t border-slate-800/30">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg px-2 py-1"
                aria-label="GitHub (opens in new tab)"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg px-2 py-1"
                aria-label="LinkedIn (opens in new tab)"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}