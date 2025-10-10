'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function ProfessionalMe() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
    };

    return (
        <section className="bg-gray-100 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="min-h-screen flex items-center justify-center p-4 sm:p-8"
            >
                {/* Main Card Container */}
                <div className="w-full max-w-6xl bg-white/40 backdrop-blur-xl border border-white/30 rounded-[3rem] shadow-2xl overflow-hidden p-6 sm:p-8">
                    
                    {/* Top Section: Image */}
                    <motion.div 
                        className="relative w-full h-96 mb-8 rounded-3xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/ifti.jpg"
                            alt="Ifti Abdaal"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: '50% 20%' }}
                        />
                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-5 left-5 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                        >
                            Contact Me <ArrowRight className="inline-block ml-2" />
                        </motion.a>
                    </motion.div>

                    {/* Bottom Section: Two Columns */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        
                        {/* Bottom Left: Text Card */}
                        <motion.div 
                            className="flex flex-col justify-center space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">Actionable Productivity Tips</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Each week, I share actionable productivity tips, practical life
                                advice, and highlights from my favourite books, directly to your
                                inbox. It's free to join, and always will be.
                            </p>
                        </motion.div>

                        {/* Bottom Right: Subscribe Card */}
                        <motion.div 
                            className="bg-white/60 rounded-3xl shadow-xl p-6 border border-gray-200/80"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Subscribe to <span className="italic">LifeNotes</span>
                                </h3>
                                <span className="text-3xl flex-shrink-0">✍️</span>
                            </div>

                            <p className="text-gray-600 text-base leading-relaxed mb-4">
                                Join a growing community of more than{' '}
                                <span className="font-bold text-gray-800">
                                    330,000 friendly readers
                                </span>
                                .
                            </p>

                            <div className="flex items-center gap-2 mb-5">
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

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        required
                                        className="flex-1 px-5 py-3 border-2 border-gray-300 rounded-full focus:border-blue-400 focus:outline-none transition-colors text-gray-900 bg-gray-50"
                                    />
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}