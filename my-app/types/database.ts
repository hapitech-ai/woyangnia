export interface Database {
  public: {
    Tables: {
      sites: {
        Row: {
          id: string
          subdomain: string
          couple_name_1: string
          couple_name_2: string
          anniversary_date: string
          theme: 'soft-pink' | 'sunset-gold' | 'minimal-white' | 'night-sky'
          music: 'romantic-1' | 'romantic-2' | 'romantic-3'
          created_at: string
        }
        Insert: {
          id?: string
          subdomain: string
          couple_name_1: string
          couple_name_2: string
          anniversary_date: string
          theme?: 'soft-pink' | 'sunset-gold' | 'minimal-white' | 'night-sky'
          music?: 'romantic-1' | 'romantic-2' | 'romantic-3'
          created_at?: string
        }
        Update: {
          id?: string
          subdomain?: string
          couple_name_1?: string
          couple_name_2?: string
          anniversary_date?: string
          theme?: 'soft-pink' | 'sunset-gold' | 'minimal-white' | 'night-sky'
          music?: 'romantic-1' | 'romantic-2' | 'romantic-3'
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          name: string
          email: string | null
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email?: string | null
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string | null
          message?: string
          created_at?: string
        }
      }
    }
  }
}

export type Site = Database['public']['Tables']['sites']['Row']
export type Message = Database['public']['Tables']['messages']['Row']
