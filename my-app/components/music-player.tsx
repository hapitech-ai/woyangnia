'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Volume2, VolumeX } from 'lucide-react'

interface MusicPlayerProps {
  track: 'romantic-1' | 'romantic-2' | 'romantic-3'
  autoPlay?: boolean
}

const tracks = {
  'romantic-1': { name: 'Eternal Love', color: 'from-rose-500 to-pink-500' },
  'romantic-2': { name: 'Sweet Moments', color: 'from-amber-500 to-orange-500' },
  'romantic-3': { name: 'Dream Together', color: 'from-purple-500 to-indigo-500' },
}

export function MusicPlayer({ track, autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioElement = new Audio(`/music/${track}.mp3`)
    audioElement.loop = true
    audioElement.volume = 0.5
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ''
    }
  }, [track])

  useEffect(() => {
    if (audio) {
      audio.muted = isMuted
      if (isPlaying && !isMuted) {
        audio.play().catch(() => {
          // Auto-play blocked, show as paused
          setIsPlaying(false)
        })
      } else {
        audio.pause()
      }
    }
  }, [audio, isPlaying, isMuted])

  const togglePlay = () => {
    if (isMuted) {
      setIsMuted(false)
      setIsPlaying(true)
    } else {
      setIsMuted(!isMuted)
    }
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={togglePlay}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r ${tracks[track].color} shadow-lg shadow-rose-500/30 flex items-center justify-center text-white transition-all`}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6" />
      ) : (
        <div className="flex items-center gap-0.5">
          <motion.div
            animate={{ height: [4, 12, 4] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="w-1 bg-white rounded-full"
          />
          <motion.div
            animate={{ height: [8, 16, 8] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
            className="w-1 bg-white rounded-full"
          />
          <motion.div
            animate={{ height: [4, 12, 4] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
            className="w-1 bg-white rounded-full"
          />
        </div>
      )}

      {/* Pulse Effect */}
      {!isMuted && (
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
      )}
    </motion.button>
  )
}

export function ThemeMusicSelector({
  selected,
  onChange,
}: {
  selected: 'romantic-1' | 'romantic-2' | 'romantic-3'
  onChange: (track: 'romantic-1' | 'romantic-2' | 'romantic-3') => void
}) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Background Music</label>
      <div className="grid grid-cols-3 gap-3">
        {(Object.keys(tracks) as Array<keyof typeof tracks>).map((key) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`p-3 rounded-xl border-2 transition-all ${
              selected === key
                ? 'border-rose-500 bg-rose-50'
                : 'border-gray-200 hover:border-rose-200'
            }`}
          >
            <Music className={`w-5 h-5 mx-auto mb-2 ${selected === key ? 'text-rose-500' : 'text-gray-400'}`} />
            <span className={`text-xs font-medium ${selected === key ? 'text-rose-700' : 'text-gray-600'}`}>
              {tracks[key].name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
