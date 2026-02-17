'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200"
    >
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            }}
            animate={{
              y: -100,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear',
            }}
          >
            <Heart
              className="text-rose-300/30"
              style={{
                width: 20 + Math.random() * 30,
                height: 20 + Math.random() * 30,
              }}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">
              Create Your Love Story
            </span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            I'll Take Care of You
            <br />
            <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
              For Life
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a beautiful, personalized website to celebrate your love story.
            Share your journey, countdown to your anniversary, and cherish your memories together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/try"
              className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/25 transition-all"
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              </span>
            </Link>

            <Link
              href="#demo"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full hover:bg-white transition-colors border border-gray-200"
            >
              View Demos
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Custom Domain</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Photo Gallery</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Music & Themes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
