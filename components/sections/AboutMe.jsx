'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutMe() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Card Container */}
        <div
          className="relative bg-white/40 backdrop-blur-xl border border-white/30 rounded-[3rem] shadow-2xl overflow-hidden"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            backgroundImage: `
              radial-gradient(circle at 20px 20px, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 20px 20px, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        >
          {/* First Window - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-16"
          >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  Hey, I'm
                  <br />
                  <span className="relative inline-block">
                    Mehidi Hasan
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 300 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6C82 2 218 2 298 6"
                        stroke="#60A5FA"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-700 leading-relaxed"
              >
                Since 2017, I've been documenting my personal, professional and entrepreneurial journey on YouTube, sharing the books, strategies, ideas and tools that I've found most helpful over the years to help us be more productive, live more intentionally and build a life we love.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-700 leading-relaxed"
              >
                This seems to have resonated with people, to the point that our online community has grown to 8 million followers across YouTube and Instagram, although we're also growing on X/Twitter, LinkedIn and TikTok too).
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  className="group bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Bhaiya lets Connect
                </Button>
              </motion.div>
            </div>

            {/* Right Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full"
            >
              {/* Decorative SVG Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 50,100 Q 200,150 350,200"
                  stroke="#FF9A62"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="100" r="8" fill="#FF9A62" />
                <circle cx="350" cy="200" r="8" fill="#FF9A62" />
                <path
                  d="M 100,450 L 250,350"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <polyline
                  points="520,150 540,130 560,150"
                  stroke="#A78BFA"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Image 1 - Top Right */}
              <div className="absolute top-0 right-12 w-64 h-94 rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <img
                  src="/ifti1.jpg"
                  alt="Ali Abdaal presenting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 - Center Left */}
              <div className="absolute top-32 left-0 w-58 h-74 rounded-3xl overflow-hidden shadow-2xl transform -rotate-6">
                <img
                  src="/ifti2.jpg"
                  alt="Ali Abdaal working"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-72 h-72 rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
                <img
                  src="/ifti3.jpg"
                  alt="Ali Abdaal headshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Second Window - Story Continuation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-screen flex items-center justify-center p-8 md:p-12 lg:p-16"
          >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-700 leading-relaxed"
              >
                It's been a pretty wild ride – from a dorm room at Cambridge University, to working full-time as a doctor during the pandemic, to leaving Medicine to build a business and a life I feel much more passionate about.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-slate-700 leading-relaxed"
              >
                If you've supported any part of the journey, for any length of time – thank you so much. None of this could've happened without you, and I hope to continue building and sharing useful stuff online, for free, forever 😊
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors group"
                >
                  Read my full story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 pt-6"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-6 text-base font-semibold border-2 border-cyan-400 text-slate-900 hover:bg-cyan-50"
                >
                  Watch My Videos
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-6 text-base font-semibold border-2 border-cyan-400 text-slate-900 hover:bg-cyan-50"
                >
                  Read My Articles
                </Button>
              </motion.div>

            </div>

            {/* Right Single Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full flex items-center justify-center"
            >
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/ifti.jpg"
                  alt="Ali Abdaal with book"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative SVG Elements */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 100,150 Q 200,100 300,150"
                  stroke="#FF9A62"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="90" cy="150" r="8" fill="#FF9A62" />
                <circle cx="310" cy="150" r="8" fill="#FF9A62" />
              </svg>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
