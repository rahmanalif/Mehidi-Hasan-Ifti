'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Zap, Trophy, ArrowRight } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Journaling Prompts Pack',
    description: '50 powerful questions to unlock clarity and self-awareness.',
    downloads: '45k+',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Zap,
    title: '7-Day Focus Challenge',
    description: 'Build laser-sharp focus and eliminate distractions in a week.',
    downloads: '32k+',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Trophy,
    title: 'YouTube Starter Kit',
    description: 'Everything you need to launch your first video successfully.',
    downloads: '28k+',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
];

export default function FreeResources() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full mb-6"
          >
            <Download className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Check Out My Most{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
              Popular Resources
            </span>
          </h2>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${resource.bgColor} mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${resource.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{resource.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500">
                      {resource.downloads} downloads
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      FREE
                    </span>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${resource.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <Download className="w-5 h-5" />
                    Download Now
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Resources CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Want More Resources?
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Subscribe to my newsletter and get instant access to my complete
                resource library, including exclusive templates, guides, and
                mini-courses.
              </p>
              <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                Get Full Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
