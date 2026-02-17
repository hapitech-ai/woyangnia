import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, MessageCircle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - woyangnia.com',
  description: 'Get in touch with us. We\'d love to hear from you!',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">
                Get in Touch
              </span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Have questions or feedback? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">zspengyou@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WeChat</h3>
                    <p className="text-gray-600">smile04009</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-500 to-purple-500 rounded-2xl p-6 text-white">
                <Heart className="w-8 h-8 mb-4 fill-white" />
                <h3 className="font-semibold text-lg mb-2">We'd Love to Hear From You</h3>
                <p className="text-rose-100 text-sm">
                  Whether you have a question about features, pricing, or just want to share your love story, 
                  we're here to help.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
