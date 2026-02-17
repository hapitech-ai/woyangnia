'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Check, X, Loader2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

interface SubdomainCheckerProps {
  onAvailable?: (subdomain: string) => void
}

export function SubdomainChecker({ onAvailable }: SubdomainCheckerProps) {
  const [subdomain, setSubdomain] = useState('')
  const [status, setStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle')
  const [message, setMessage] = useState('')

  const checkSubdomain = async () => {
    if (!subdomain.trim()) {
      setMessage('Please enter a subdomain')
      return
    }

    if (!/^[a-z0-9-]+$/.test(subdomain)) {
      setMessage('Only lowercase letters, numbers, and hyphens allowed')
      setStatus('taken')
      return
    }

    if (subdomain.length < 3) {
      setMessage('Subdomain must be at least 3 characters')
      setStatus('taken')
      return
    }

    setStatus('checking')
    setMessage('')

    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('sites')
        .select('subdomain')
        .eq('subdomain', subdomain)
        .single()

      if (error && error.code === 'PGRST116') {
        // No rows found = available
        setStatus('available')
        setMessage(`${subdomain}.woyangnia.com is available!`)
        onAvailable?.(subdomain)
      } else {
        setStatus('taken')
        setMessage(`${subdomain}.woyangnia.com is already taken`)
      }
    } catch {
      setStatus('idle')
      setMessage('Error checking availability. Please try again.')
    }
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Choose Your Subdomain</label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={subdomain}
            onChange={(e) => {
              setSubdomain(e.target.value.toLowerCase())
              setStatus('idle')
              setMessage('')
            }}
            placeholder="your-names"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            .woyangnia.com
          </span>
        </div>
        <button
          onClick={checkSubdomain}
          disabled={status === 'checking'}
          className="px-6 py-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all disabled:opacity-50 flex items-center gap-2"
        >
          {status === 'checking' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
          Check
        </button>
      </div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center gap-2 text-sm ${
              status === 'available'
                ? 'text-green-600'
                : status === 'taken'
                ? 'text-red-500'
                : 'text-gray-500'
            }`}
          >
            {status === 'available' && <Check className="w-4 h-4" />}
            {status === 'taken' && <X className="w-4 h-4" />}
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-gray-400">
        Use lowercase letters, numbers, and hyphens only (3-30 characters)
      </p>
    </div>
  )
}
