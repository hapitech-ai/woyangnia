export const themes = {
  'soft-pink': {
    name: 'Soft Pink',
    bg: 'bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200',
    text: 'text-rose-900',
    accent: 'bg-rose-500',
    accentHover: 'hover:bg-rose-600',
    card: 'bg-white/80 backdrop-blur-sm',
    button: 'bg-rose-500 hover:bg-rose-600 text-white',
    heart: 'text-rose-500',
  },
  'sunset-gold': {
    name: 'Sunset Gold',
    bg: 'bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100',
    text: 'text-amber-900',
    accent: 'bg-amber-500',
    accentHover: 'hover:bg-amber-600',
    card: 'bg-white/80 backdrop-blur-sm',
    button: 'bg-amber-500 hover:bg-amber-600 text-white',
    heart: 'text-amber-500',
  },
  'minimal-white': {
    name: 'Minimal White',
    bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    text: 'text-gray-800',
    accent: 'bg-gray-800',
    accentHover: 'hover:bg-gray-900',
    card: 'bg-white/90 backdrop-blur-sm',
    button: 'bg-gray-800 hover:bg-gray-900 text-white',
    heart: 'text-gray-800',
  },
  'night-sky': {
    name: 'Night Sky',
    bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800',
    text: 'text-white',
    accent: 'bg-purple-500',
    accentHover: 'hover:bg-purple-600',
    card: 'bg-white/10 backdrop-blur-sm',
    button: 'bg-purple-500 hover:bg-purple-600 text-white',
    heart: 'text-purple-400',
  },
} as const

export type ThemeKey = keyof typeof themes

export const musicTracks = {
  'romantic-1': { name: 'Eternal Love', file: '/music/romantic-1.mp3' },
  'romantic-2': { name: 'Sweet Moments', file: '/music/romantic-2.mp3' },
  'romantic-3': { name: 'Dream Together', file: '/music/romantic-3.mp3' },
} as const

export type MusicKey = keyof typeof musicTracks
