'use client';

import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6"
            >
              <Mail className="w-8 h-8 text-orange-600" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Subscribe to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-blue-600">
                LifeNotes
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-4">
              Join 300k+ curious minds learning how to live smarter, work
              better, and grow faster.
            </p>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: '🧠', label: 'Weekly Insights' },
              { icon: '⚡', label: 'Productivity Tips' },
              { icon: '📖', label: 'Personal Stories' },
              { icon: '🎁', label: 'Curated Resources' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-semibold text-gray-800">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
                {status === 'success' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </motion.div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === 'loading'
                  ? 'Subscribing...'
                  : status === 'success'
                  ? '✓ Subscribed!'
                  : 'Subscribe Now'}
              </button>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <p>Your privacy is protected. Unsubscribe anytime.</p>
              </div>
            </form>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl text-center text-green-800"
              >
                🎉 Welcome aboard! Check your inbox for a confirmation email.
              </motion.div>
            )}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-blue-400 border-2 border-white"
                  />
                ))}
              </div>
              <p className="ml-2">
                <span className="font-bold text-gray-900">300,000+</span>{' '}
                subscribers already learning
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
