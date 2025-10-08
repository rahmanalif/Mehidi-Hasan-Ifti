'use client';

import { motion } from 'framer-motion';
import {
  Youtube,
  Instagram,
  Linkedin,
  Music2,
  Facebook,
} from 'lucide-react';

const navigation = {
  more: [
    { name: 'About', href: '#about' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Contact', href: '#contact' },
    { name: 'My Account', href: '#account' },
  ],
  freeContent: [
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Articles & Guides', href: '#articles' },
    { name: 'Podcast', href: '#podcast' },
    { name: 'Videos', href: '#videos' },
    { name: 'Book Notes', href: '#book-notes' },
  ],
  products: [
    { name: 'My Book', href: '#book' },
    { name: 'YouTuber Academy', href: '#youtube-academy' },
    { name: 'LifeOS', href: '#lifeos' },
  ],
};

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'TikTok', icon: Music2, href: '#' },
  { name: 'X', icon: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ), href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Brand Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20 L15 5 L20 15 L25 5 L35 20" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M5 20 L15 5 L20 15 L25 5 L35 20" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(0, 8)"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Mehidi Hasan Ifti
                  </h3>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                  © Mehidi Hasan Ifti {new Date().getFullYear()}. All rights reserved.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-8">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1, backgroundColor: '#E5E7EB' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900">More</h4>
              <ul className="space-y-3">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-base underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Free Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900">Free Content</h4>
              <ul className="space-y-3">
                {navigation.freeContent.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-base underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-gray-900">Products</h4>
              <ul className="space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-base underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100"></div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-base"
          >
            <a
              href="#privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors underline"
            >
              Privacy Policy
            </a>
            <span className="text-gray-400">/</span>
            <a
              href="#cookies"
              className="text-gray-600 hover:text-gray-900 transition-colors underline"
            >
              Cookie Policy
            </a>
          </motion.div>

          {/* Made with Button */}
          <motion.a
            href="#lifeos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base"
          >
            Made with ❤️ by Alif
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
