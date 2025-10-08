'use client';

import { motion } from 'framer-motion';
import {
  Youtube,
  Instagram,
  Linkedin,
  Music2,
  Facebook,
} from 'lucide-react';
import Image from 'next/image';

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
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ), href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AA</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Ali Abdaal
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  © Ali Abdaal {new Date().getFullYear()}. All rights reserved.
                </p>
              </motion.div>
            </div>

            {/* More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-base font-semibold mb-6 text-gray-900">More</h4>
              <ul className="space-y-4">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-sm"
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
              <h4 className="text-base font-semibold mb-6 text-gray-900">Free Content</h4>
              <ul className="space-y-4">
                {navigation.freeContent.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-sm"
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
              <h4 className="text-base font-semibold mb-6 text-gray-900">Products</h4>
              <ul className="space-y-4">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 text-sm"
            >
              <a
                href="#privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">/</span>
              <a
                href="#cookies"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Cookie Policy
              </a>
            </motion.div>

            {/* Join LifeOS Button */}
            <motion.a
              href="#lifeos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
            >
              Join LifeOS Today
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
