'use client';

import { motion } from 'framer-motion';
import { Star, Users, TrendingUp, ArrowRight } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Viral Thumbnail Pack',
    description: 'Customizable templates proven to boost CTR',
    icon: '🎨',
    price: '$49',
    rating: 4.9,
    reviews: 1250,
    students: '12k+',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-50',
  },
  {
    id: 2,
    title: '7-Figure Challenge',
    description: 'Complete roadmap to building a profitable business',
    icon: '💎',
    price: '$197',
    rating: 5.0,
    reviews: 850,
    students: '8k+',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 3,
    title: 'LifeOS System',
    description: 'All-in-one productivity system in Notion',
    icon: '⚡',
    price: '$29',
    rating: 4.8,
    reviews: 2100,
    students: '18k+',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function PopularResources() {
  return (
    <section className="py-24 bg-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 rounded-full mb-6"
          >
            <TrendingUp className="w-5 h-5 text-orange-600" />
            <span className="font-semibold text-gray-800">
              Best Sellers
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Check Out My Most{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
              Popular Resources
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your life with these battle-tested tools and courses
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-transparent">
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{resource.description}</p>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900">
                          {resource.rating}
                        </span>
                        <span className="text-gray-500">
                          ({resource.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{resource.students} students enrolled</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 bg-gradient-to-r ${resource.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    Get Access Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
