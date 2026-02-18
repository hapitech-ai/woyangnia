export type Database = any

export interface Site {
  id: string
  subdomain: string
  couple_name_1: string
  couple_name_2: string
  anniversary_date: string
  theme: 'soft-pink' | 'sunset-gold' | 'minimal-white' | 'night-sky'
  music: 'romantic-1' | 'romantic-2' | 'romantic-3'
  created_at: string
}

export interface Message {
  id: string
  name: string
  email: string | null
  message: string
  created_at: string
}
