'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Eye, ArrowRight } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'I Read More in 2023 Than I Did in 20 Years (How to Build Daily Reading Habit)',
    thumbnail: '📚',
    views: '2.4M',
    duration: '12:34',
    category: 'Productivity',
  },
  {
    id: 2,
    title: 'How to Get Rich (Without Getting Lucky) - Naval Ravikant',
    thumbnail: '💰',
    views: '1.8M',
    duration: '18:45',
    category: 'Business',
  },
  {
    id: 3,
    title: 'How I Take AI-Powered Notes with Notion (My Complete System)',
    thumbnail: '🤖',
    views: '3.2M',
    duration: '15:20',
    category: 'Productivity',
  },
];

const articles = [
  {
    id: 1,
    title: 'The Ultimate Guide to Productivity Systems',
    excerpt:
      'Everything you need to know about building systems that actually work...',
    readTime: '8 min',
    category: 'Productivity',
  },
  {
    id: 2,
    title: '10 Lessons from Building a 7-Figure Business',
    excerpt:
      'What I learned from growing my business from zero to seven figures...',
    readTime: '12 min',
    category: 'Business',
  },
  {
    id: 3,
    title: 'How to Study Smarter, Not Harder',
    excerpt:
      'Evidence-based techniques that will transform your learning...',
    readTime: '10 min',
    category: 'Education',
  },
];

export default function ContentHub() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Watch My Most{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
              Popular Videos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights on productivity, business, and personal growth
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-orange-200 to-blue-200 flex items-center justify-center text-6xl">
                  {video.thumbnail}

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
                    >
                      <Play className="w-8 h-8 text-orange-600 ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded-lg flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views} views
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Articles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Latest{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
              Articles
            </span>
          </h3>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} read
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {article.title}
                      </h4>

                      <p className="text-gray-600 mb-4">{article.excerpt}</p>

                      <span className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>

                    <div className="hidden sm:block w-24 h-24 bg-gradient-to-br from-orange-200 to-blue-200 rounded-2xl flex-shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
            View All Content
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
