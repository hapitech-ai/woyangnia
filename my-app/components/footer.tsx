import Link from 'next/link'
import { Heart, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="text-xl font-semibold">woyangnia</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              Create a beautiful, personalized website to celebrate your love story.
              Because every love deserves to be shared.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/try" className="hover:text-white transition-colors">Free Trial</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                zspengyou@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WeChat: smile04009
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} woyangnia.com. All rights reserved.</p>
          <p className="mt-2">"I'll take care of you for the rest of my life."</p>
        </div>
      </div>
    </footer>
  )
}
