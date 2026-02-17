'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Eye } from 'lucide-react'
import Image from 'next/image'

const demoImages = [
  { id: 1, alt: 'Romantic couple walking on beach at sunset', category: 'Beach' },
  { id: 2, alt: 'Couple holding hands in flower field', category: 'Nature' },
  { id: 3, alt: 'Romantic dinner by candlelight', category: 'Dining' },
  { id: 4, alt: 'Couple watching sunrise together', category: 'Sunrise' },
  { id: 5, alt: 'Dancing under the stars', category: 'Night' },
  { id: 6, alt: 'Couple picnic in park', category: 'Picnic' },
  { id: 7, alt: 'Kissing under umbrella in rain', category: 'Rain' },
  { id: 8, alt: 'Couple on mountain top', category: 'Adventure' },
  { id: 9, alt: 'Reading books together', category: 'Cozy' },
  { id: 10, alt: 'Coffee date morning', category: 'Cafe' },
  { id: 11, alt: 'Couple cycling together', category: 'Active' },
  { id: 12, alt: 'Sunset silhouette embrace', category: 'Sunset' },
  { id: 13, alt: 'Cooking together in kitchen', category: 'Home' },
  { id: 14, alt: 'Couple at music concert', category: 'Concert' },
  { id: 15, alt: 'Stargazing on blanket', category: 'Night' },
  { id: 16, alt: 'Couple traveling, looking at map', category: 'Travel' },
  { id: 17, alt: 'Board games and laughter', category: 'Fun' },
  { id: 18, alt: 'Couple painting together', category: 'Art' },
  { id: 19, alt: 'Winter snow walk', category: 'Winter' },
  { id: 20, alt: 'Anniversary celebration', category: 'Celebration' },
]

export function DemoGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">
              Gallery Preview
            </span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cherish Your Memories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload up to 10 photos and create a beautiful masonry gallery to showcase your love story.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {demoImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                <div
                  className={`aspect-[${index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/3' : '1/1'}] bg-gradient-to-br ${
                    [
                      'from-rose-200 to-pink-300',
                      'from-amber-200 to-orange-300',
                      'from-purple-200 to-pink-300',
                      'from-blue-200 to-purple-300',
                      'from-emerald-200 to-teal-300',
                    ][index % 5]
                  }`}
                  style={{
                    minHeight: index % 4 === 0 ? '280px' : index % 4 === 1 ? '200px' : index % 4 === 2 ? '240px' : '180px',
                  }}
                >
                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white/50" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4"
                >
                  <div className="flex items-center gap-2 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">{image.category}</span>
                  </div>
                </motion.div>

                {/* Soft Zoom on Hover */}
                <motion.div
                  animate={{ scale: hoveredId === image.id ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500">
            * Demo images shown with placeholder gradients. Upload your own photos to customize.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
