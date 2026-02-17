'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Palette } from 'lucide-react'
import { themes, type ThemeKey } from '@/lib/themes'

interface ThemeSwitcherProps {
  selected: ThemeKey
  onChange: (theme: ThemeKey) => void
  showPreview?: boolean
}

export function ThemeSwitcher({ selected, onChange, showPreview = true }: ThemeSwitcherProps) {
  const theme = themes[selected]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-rose-500" />
        <label className="text-sm font-medium text-gray-700">Choose Your Theme</label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {(Object.keys(themes) as ThemeKey[]).map((key) => {
          const t = themes[key]
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                selected === key
                  ? 'border-rose-500 shadow-lg shadow-rose-500/10'
                  : 'border-gray-200 hover:border-rose-200 hover:shadow-md'
              }`}
            >
              {/* Color Preview */}
              <div className={`h-16 rounded-lg mb-3 ${t.bg}`} />
              
              {/* Theme Name */}
              <span className={`text-sm font-medium ${selected === key ? 'text-rose-600' : 'text-gray-700'}`}>
                {t.name}
              </span>

              {/* Selected Indicator */}
              {selected === key && (
                <motion.div
                  layoutId="selectedTheme"
                  className="absolute top-2 right-2"
                >
                  <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-white fill-white" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>

      {showPreview && (
        <div className={`mt-4 p-6 rounded-xl ${theme.bg} ${theme.text}`}>
          <p className="text-sm font-medium mb-2">Preview</p>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.button}`}>
            <Heart className="w-4 h-4" />
            <span className="text-sm">Sample Button</span>
          </div>
        </div>
      )}
    </div>
  )
}
