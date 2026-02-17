'use client'

import { motion } from 'framer-motion'
import { Heart, Check, Star } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: '1 Month',
    price: '99',
    priceRMB: true,
    period: '/month',
    description: 'Perfect for trying it out',
    features: [
      'Custom subdomain',
      'Up to 10 photos',
      'Background music',
      'All 4 themes',
      'Private access option',
      'Mobile optimized',
      'Anniversary counter',
    ],
    recommended: false,
  },
  {
    name: '1 Year',
    price: '520',
    priceRMB: true,
    period: '/year',
    description: 'Best value for couples',
    features: [
      'Custom subdomain',
      'Up to 10 photos',
      'Background music',
      'All 4 themes',
      'Private access option',
      'Mobile optimized',
      'Anniversary counter',
      'Priority support',
    ],
    recommended: true,
  },
  {
    name: '5 Years',
    price: '1314',
    priceRMB: true,
    period: '/5 years',
    description: 'Lifetime of memories',
    features: [
      'Custom subdomain',
      'Up to 10 photos',
      'Background music',
      'All 4 themes',
      'Private access option',
      'Mobile optimized',
      'Anniversary counter',
      'Priority support',
      'Custom domain (coming soon)',
    ],
    recommended: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">
              Pricing
            </span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your journey. All plans include the same great features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.recommended
                  ? 'bg-gradient-to-b from-rose-500 to-purple-600 text-white shadow-xl shadow-rose-500/20 scale-105'
                  : 'bg-white border border-gray-200 hover:border-rose-200 hover:shadow-lg transition-all'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.recommended ? 'text-rose-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-sm ${plan.recommended ? 'text-rose-100' : 'text-gray-500'}`}>¥</span>
                  <span className={`text-4xl font-bold ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.recommended ? 'text-rose-100' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.recommended ? 'text-rose-200' : 'text-rose-500'}`} />
                    <span className={`text-sm ${plan.recommended ? 'text-rose-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/try"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                  plan.recommended
                    ? 'bg-white text-rose-600 hover:bg-rose-50'
                    : 'bg-gradient-to-r from-rose-500 to-purple-500 text-white hover:shadow-lg hover:shadow-rose-500/25'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          Payment integration coming soon. Start with a free trial today!
        </motion.p>
      </div>
    </section>
  )
}
