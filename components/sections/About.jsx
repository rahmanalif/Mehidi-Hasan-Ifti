'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Award, Heart } from 'lucide-react';
import Image from 'next/image';

const milestones = [
  {
    year: '2018',
    title: 'Started Creating Content',
    description: 'Launched my first YouTube video on productivity and studying.',
  },
  {
    year: '2020',
    title: 'Hit 100K Subscribers',
    description: 'Reached a major milestone and launched my first online course.',
  },
  {
    year: '2022',
    title: 'Built Multiple Businesses',
    description: 'Created successful ventures in education and digital products.',
  },
  {
    year: '2024',
    title: 'Community of 300K+',
    description: 'Now helping hundreds of thousands achieve their goals.',
  },
];

const stats = [
  { icon: Users, value: '300K+', label: 'Community Members' },
  { icon: Award, value: '50M+', label: 'Views on YouTube' },
  { icon: Sparkles, value: '100+', label: 'Resources Created' },
  { icon: Heart, value: '10K+', label: 'Success Stories' },
];

export default function About() {
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Hey, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
              Mehidi Hasan Ifti
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From struggling student to entrepreneur and educator helping
            thousands achieve their dreams
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-200 to-blue-200 aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  📸
                </div>
              </div>
              {/* Two smaller images */}
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-200 to-pink-200 aspect-square">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  🎥
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-200 to-teal-200 aspect-square">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  📚
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">300K+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                I wasn't always a "productivity guru." I struggled with focus,
                time management, and finding my path. But through trial, error,
                and lots of learning, I discovered systems that transformed my
                life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Now, I'm on a mission to share what I've learned—helping students
                excel academically, creators build sustainable channels, and
                entrepreneurs launch businesses they love.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My approach combines evidence-based techniques with practical,
                real-world experience. I believe anyone can achieve extraordinary
                things with the right systems, mindset, and community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Entrepreneur', 'YouTuber', 'Educator', 'Author'].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 text-gray-800 rounded-full font-semibold"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <Icon className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            My Journey
          </h3>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-4 border-orange-500"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg" />

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-orange-600 font-bold text-lg mb-2">
                    {milestone.year}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
