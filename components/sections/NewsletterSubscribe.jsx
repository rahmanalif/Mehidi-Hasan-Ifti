'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Title and Social Proof */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Subscribe to
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  LifeNotes
                </h2>
                <span className="text-5xl">✍️</span>
              </div>

              <p className="text-lg text-slate-700 mb-6">
                Join a growing community of more than
              </p>
              <p className="text-2xl font-bold text-slate-900 mb-8">
                330,000 friendly readers.
              </p>

              {/* Testimonial Section */}
              <div className="flex items-center gap-4">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>

                {/* Rating */}
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 font-medium">200+ reviews</p>
                </div>
              </div>
            </div>

            {/* Right Side - Description and Form */}
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Each week, I share actionable productivity tips, practical life advice, and highlights from my favourite books, directly to your inbox. It's free, and always will be.
              </p>

              {/* Subscribe Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-6 py-4 bg-stone-100 border-none rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-900 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>

                {/* Privacy Notice */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  By submitting this form, you'll be signed up to my free newsletter, which sometimes includes mentions of my books, apps and courses. You can opt-out at any time with no hard feelings 😊 Here's our{' '}
                  <a href="/privacy" className="text-blue-500 hover:text-blue-600 underline">
                    privacy policy
                  </a>
                  {' '}if you like reading.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
