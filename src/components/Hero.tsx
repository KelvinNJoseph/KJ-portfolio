"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStacks = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "shadcn/ui", icon: "🧩" },
    { name: "TanStack Query", icon: "🔄📦" },
    { name: "React Hook Form", icon: "📋" },
    { name: "Framer Motion", icon: "🎞️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Prisma", icon: "🌿" },
    { name: "Supabase", icon: "⚡" },
    { name: "Version Control", icon: "⚙️" },
  ];

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 mt-5 mb-5"
      aria-labelledby="hero-heading"
    >
      {/* Background grid and blur blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] bg-blue-500/20 blur-[100px] rounded-full" />
        <div className="absolute left-0 bottom-0 -z-10 h-[300px] w-[300px] bg-purple-500/20 blur-[100px] rounded-full" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Main text content */}
          <div className="lg:col-span-3 space-y-8">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Kelvin Joseph
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mt-4">
                Full-Stack Software Engineer
                <span className="relative inline-block">
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </h2>
            </motion.header>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-300 text-lg leading-relaxed max-w-3xl"
            >
              I’m a Full-Stack Software Engineer based in Kenya with a passion
              for building modern, scalable, and user-centric web applications.
              I specialize in crafting responsive, accessible UIs with React,
              Next.js, and Tailwind CSS, and developing robust, type-safe APIs
              using Node.js, Express, and PostgreSQL via Prisma or
              Supabase. My work spans everything from frontend animation and
              performance optimization to backend architecture, secure
              authentication, and seamless serverless deployments on Vercel.
              With a strong foundation in engineering principles, I bring both
              precision and creativity to every project I build.
            </motion.article>

            {/* Tech Stack Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              aria-labelledby="tech-stack-heading"
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <h3
                  id="tech-stack-heading"
                  className="text-sm font-medium text-blue-300"
                >
                  TECH STACK
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {techStacks.map((tech, index) => (
                  <motion.li
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-3 py-1.5 flex items-center space-x-1.5 group hover:border-blue-500/50 transition-all duration-300"
                  >
                    <span className="text-sm" role="img" aria-label={tech.name}>
                      {tech.icon}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* CTA Section */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
              aria-label="Primary"
            >
              <Button asChild>
                <Link href="https://github.com/KelvinNJoseph">
                  <span className="flex items-center">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </motion.nav>
          </div>

          {/* Animation section */}
          <motion.aside
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:col-span-2 hidden lg:flex justify-center items-center"
            aria-hidden="true"
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      animate={{ rotateZ: 360, rotateY: 360 }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        className={cn(
                          "absolute w-4 h-4 rounded-full",
                          i === 0
                            ? "bg-blue-500 top-0 left-1/2"
                            : i === 1
                            ? "bg-purple-500 bottom-1/4 right-0"
                            : "bg-cyan-500 bottom-0 left-1/4"
                        )}
                      />
                      <div className="absolute inset-0 border-2 border-dashed border-slate-700/30 rounded-full" />
                    </motion.div>
                  ))}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-slate-700/50 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Zap className="w-12 h-12 text-blue-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
