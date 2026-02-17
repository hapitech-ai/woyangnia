'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Heart, Upload, X, Loader2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SubdomainChecker } from '@/components/subdomain-checker'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeMusicSelector } from '@/components/music-player'
import { createClient } from '@/lib/supabase/client'
import { ThemeKey } from '@/lib/themes'

export default function TryPage() {
  const router = useRouter()
  const [subdomain, setSubdomain] = useState('')
  const [formData, setFormData] = useState({
    coupleName1: '',
    coupleName2: '',
    anniversaryDate: '',
    theme: 'soft-pink' as ThemeKey,
    music: 'romantic-1' as 'romantic-1' | 'romantic-2' | 'romantic-3',
  })
  const [images, setImages] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (images.length + files.length > 10) {
      alert('Maximum 10 images allowed')
      return
    }
    setImages([...images, ...files])
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!subdomain) {
      alert('Please check subdomain availability first')
      return
    }

    setIsSubmitting(true)

    try {
      const supabase = createClient()

      // Create site record
      const { data: site, error: siteError } = await supabase
        .from('sites')
        .insert({
          subdomain,
          couple_name_1: formData.coupleName1,
          couple_name_2: formData.coupleName2,
          anniversary_date: formData.anniversaryDate,
          theme: formData.theme,
          music: formData.music,
        })
        .select()
        .single()

      if (siteError) throw siteError

      // Upload images
      for (let i = 0; i < images.length; i++) {
        const file = images[i]
        const fileExt = file.name.split('.').pop()
        const fileName = `${subdomain}/${Date.now()}-${i}.${fileExt}`

        await supabase.storage
          .from('sites')
          .upload(fileName, file)
      }

      // Redirect to preview
      router.push(`/preview/${subdomain}`)
    } catch (error) {
      console.error('Error creating site:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">
                Free Trial
              </span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Create Your Love Page
            </h1>
            <p className="text-gray-600">
              Fill in the details below to create your personalized couple website.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8"
          >
            {/* Subdomain */}
            <SubdomainChecker onAvailable={setSubdomain} />

            {/* Couple Names */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.coupleName1}
                  onChange={(e) => setFormData({ ...formData, coupleName1: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="e.g., Jack"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Partner's Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.coupleName2}
                  onChange={(e) => setFormData({ ...formData, coupleName2: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                  placeholder="e.g., Sophia"
                />
              </div>
            </div>

            {/* Anniversary Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Anniversary Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={formData.anniversaryDate}
                onChange={(e) => setFormData({ ...formData, anniversaryDate: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
              />
            </div>

            {/* Theme Selection */}
            <ThemeSwitcher
              selected={formData.theme}
              onChange={(theme) => setFormData({ ...formData, theme })}
            />

            {/* Music Selection */}
            <ThemeMusicSelector
              selected={formData.music}
              onChange={(music) => setFormData({ ...formData, music })}
            />

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Photos (up to 10)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-8 border-2 border-dashed border-gray-200 rounded-xl hover:border-rose-300 hover:bg-rose-50 transition-all flex flex-col items-center gap-2"
              >
                <Upload className="w-8 h-8 text-gray-400" />
                <span className="text-sm text-gray-600">Click to upload photos</span>
                <span className="text-xs text-gray-400">{images.length}/10 uploaded</span>
              </button>

              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !subdomain}
              className="w-full py-4 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Your Page...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Create Love Page
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
