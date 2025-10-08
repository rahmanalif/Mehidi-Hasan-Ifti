'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroNew() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1400px]">
        {/* BIG CARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
        >
          {/* HERO CONTENT */}
          <div className="px-6 sm:px-12 lg:px-16 py-12 lg:py-20">
            {/* Main Content: Photo on Left, Text on Right */}
            <div className="grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-16 items-start mb-16">
              {/* LEFT: Profile Photo with Yellow Circle */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full max-w-[420px]">
                  {/* Yellow circle background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full transform -translate-x-8 -translate-y-8 scale-105" />

                  {/* Decorative sparkle */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -top-8 -left-10 text-yellow-400 text-5xl z-10"
                  >
                    ✨
                  </motion.div>

                  {/* Profile Image */}
                  <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-100 z-10">
                    <Image
                      src="/ifti.jpg"
                      alt="Mehidi Hasan Ifti"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Hey Friends + Intro Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8 pt-8"
              >
                {/* Hey Friends with underline and waving hand */}
                <div className="relative inline-block">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                    Hey Friends{' '}
                    <span className="relative inline-block">
                      <svg
                        className="absolute bottom-2 left-0 w-full"
                        viewBox="0 0 400 20"
                        fill="none"
                        style={{ height: '12px' }}
                      >
                        <motion.path
                          d="M5 12 Q 200 5, 395 12"
                          stroke="#60A5FA"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </svg>
                    </span>
                  </h1>
                  {/* Waving hand to the right */}
                  <motion.span
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block text-6xl lg:text-7xl ml-4 align-middle"
                  >
                    👋
                  </motion.span>
                </div>

                {/* Intro text */}
                <div className="text-2xl lg:text-3xl text-gray-800 leading-relaxed max-w-2xl">
                  <p>
                    I'm Ali. I'm a{' '}
                    <span className="font-semibold">Doctor</span> turned{' '}
                    <span className="font-semibold">Entrepreneur</span>,{' '}
                    <span className="font-semibold">YouTuber</span>, and the
                    author of the New York Times bestseller,{' '}
                    <a
                      href="#"
                      className="font-bold underline decoration-2 decoration-orange-400 hover:text-orange-600 transition-colors"
                    >
                      Feel-Good Productivity
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-end pr-12 -mt-8 mb-12"
            >
              <svg
                width="120"
                height="160"
                viewBox="0 0 120 160"
                fill="none"
                className="text-orange-400"
              >
                <motion.path
                  d="M60 10 Q 80 60, 70 110 L 70 135"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M70 135 L 62 125 M70 135 L 78 125"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                />
              </svg>
            </motion.div>

            {/* SUBSCRIBE TO LIFENOTES CARD - Aligned Left with Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid lg:grid-cols-[450px_1fr] gap-8 lg:gap-16"
            >
              {/* LEFT SIDE: Subscribe Card (aligned with photo) */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-200">
                <div className="flex items-start gap-2 sm:gap-3 mb-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                    Subscribe to <span className="italic">LifeNotes</span>
                  </h3>
                  <span className="text-3xl sm:text-4xl flex-shrink-0">✍️</span>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Join a growing community of more than{' '}
                  <span className="font-bold text-gray-900">
                    330,000 friendly readers
                  </span>
                  .
                </p>

                {/* Avatars and stars */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-300 to-pink-300"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">200+ reviews</span>
                </div>
              </div>

              {/* RIGHT SIDE: Description Text */}
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                  Each week, I share actionable productivity tips, practical life
                  advice, and highlights from my favourite books, directly to your
                  inbox. It's free to join, and always will be.
                </p>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-full focus:border-blue-400 focus:outline-none transition-colors text-gray-900 bg-gray-50"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>

                <p className="text-sm text-gray-600 leading-relaxed">
                  By submitting this form, you'll be signed up to my free
                  newsletter, which sometimes includes mentions of my books, apps
                  and courses. You can opt-out at any time with no hard feelings 🙂
                  Here's our{' '}
                  <a href="#" className="underline hover:text-blue-600">
                    privacy policy
                  </a>{' '}
                  if you like reading.
                </p>
              </div>
            </motion.div>

            {/* AS FEATURED IN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-center mt-20 pb-8"
            >
              <p className="text-sm text-gray-500 mb-8">As featured in:</p>
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-50">
                {[
                  'BUSINESS INSIDER',
                  'The New York Times',
                  'GOOD MORNING AMERICA',
                  'FINANCIAL TIMES',
                  'BBC RADIO 4',
                  "Men's Health",
                ].map((brand) => (
                  <div
                    key={brand}
                    className="text-gray-700 font-semibold text-sm tracking-wide"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
