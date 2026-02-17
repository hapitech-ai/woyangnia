'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface AnniversaryCounterProps {
  anniversaryDate: string
  coupleName1: string
  coupleName2: string
  theme?: 'light' | 'dark'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function AnniversaryCounter({
  anniversaryDate,
  coupleName1,
  coupleName2,
  theme = 'light',
}: AnniversaryCounterProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isAnniversary, setIsAnniversary] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const anniversary = new Date(anniversaryDate)
      const currentYear = now.getFullYear()
      
      // Set anniversary to this year
      let nextAnniversary = new Date(anniversary)
      nextAnniversary.setFullYear(currentYear)
      
      // If passed, set to next year
      if (nextAnniversary < now) {
        nextAnniversary.setFullYear(currentYear + 1)
      }

      const diff = nextAnniversary.getTime() - now.getTime()
      
      // Check if today is the anniversary
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const anniThisYear = new Date(currentYear, anniversary.getMonth(), anniversary.getDate())
      setIsAnniversary(today.getTime() === anniThisYear.getTime())

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [anniversaryDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl font-bold ${
          theme === 'dark'
            ? 'bg-white/10 backdrop-blur-sm text-white'
            : 'bg-white/80 backdrop-blur-sm text-gray-900 shadow-lg'
        }`}
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <span className={`text-xs mt-2 ${theme === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  )

  if (isAnniversary) {
    return (
      <div className="text-center py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-full"
        >
          <Heart className="w-6 h-6 fill-white animate-pulse" />
          <span className="text-lg font-semibold">Happy Anniversary!</span>
          <Heart className="w-6 h-6 fill-white animate-pulse" />
        </motion.div>
        <p className={`mt-4 text-lg ${theme === 'dark' ? 'text-white/80' : 'text-gray-600'}`}>
          {coupleName1} & {coupleName2}
        </p>
      </div>
    )
  }

  return (
    <div className="text-center">
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/70' : 'text-gray-500'}`}>
        Counting down to your next anniversary
      </p>
      <div className="flex justify-center gap-3 sm:gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      <p className={`mt-6 text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        {coupleName1} <Heart className="inline w-5 h-5 text-rose-500 fill-rose-500 mx-1" /> {coupleName2}
      </p>
    </div>
  )
}
