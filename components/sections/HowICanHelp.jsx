'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const helpItems = [
  {
    title: 'Be More Productive',
    description:
      'Learn how to manage your time and achieve your goals, while enjoying the journey along the way.',
    hoverBgColor: 'bg-yellow-200',
    icon: '⚙️',
    link: '/productivity',
  },
  {
    title: 'Grow a YouTube Channel',
    description:
      'Learn how to start and grow a life-changing YouTube channel based on my years of experience.',
    hoverBgColor: 'bg-orange-300',
    icon: '💻',
    link: '/youtube',
  },
  {
    title: 'Build an Online Business',
    description:
      'Learn how to start and grow your online business for fun, fulfilment and financial freedom.',
    hoverBgColor: 'bg-blue-300',
    icon: '💰',
    link: '/business',
  },
  {
    title: 'Boost Your Grades',
    description:
      'Learn how to study more effectively for exams and get better grades in less time.',
    hoverBgColor: 'bg-purple-300',
    icon: '📚',
    link: '/academic',
  },
  {
    title: '... and more!',
    description: 'Explore all content',
    hoverBgColor: 'bg-yellow-200',
    icon: '✨',
    link: '/resources',
  },
];

export default function HowICanHelp() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Cascading Layout */}
        <div className="relative">
          {/* Heading + Card 1 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-0">
            {/* LEFT: Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pr-12 lg:pl-20 lg:pt-20"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                How Can
                <br />
                I Help{' '}
                <span className="relative inline-block">
                  <span className="relative inline-block">
                    You?
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 300 20"
                      fill="none"
                      style={{ height: '16px' }}
                    >
                      <motion.path
                        d="M5 12 Q 150 5, 295 12"
                        stroke="#60A5FA"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />
                    </svg>
                  </span>
                </span>
              </h2>
            </motion.div>

            {/* RIGHT: Card 1 */}
            <motion.a
              href={helpItems[0].link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-white hover:bg-transparent rounded-3xl p-8 lg:p-12 min-h-[350px] lg:h-[450px] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${helpItems[0].hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-8">{helpItems[0].icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {helpItems[0].title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    {helpItems[0].description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group-hover:gap-3 transition-all">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Card 2 - LEFT (starts from middle of Card 1) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:-mt-[100px] mt-8">
            <motion.a
              href={helpItems[1].link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white hover:bg-transparent rounded-3xl p-8 lg:p-12 min-h-[350px] lg:h-[450px] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${helpItems[1].hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-8">{helpItems[1].icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {helpItems[1].title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    {helpItems[1].description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group-hover:gap-3 transition-all">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
            <div></div>
          </div>

          {/* Card 3 - RIGHT (starts from middle of Card 2) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:-mt-[300px] mt-8">
            <div></div>
            <motion.a
              href={helpItems[2].link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white hover:bg-transparent rounded-3xl p-8 lg:p-12 min-h-[350px] lg:h-[450px] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${helpItems[2].hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-8">{helpItems[2].icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {helpItems[2].title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    {helpItems[2].description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group-hover:gap-3 transition-all">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Card 4 - LEFT (starts from middle of Card 3) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:-mt-[100px] mt-8">
            <motion.a
              href={helpItems[3].link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white hover:bg-transparent rounded-3xl p-8 lg:p-12 min-h-[350px] lg:h-[450px] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${helpItems[3].hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-8">{helpItems[3].icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {helpItems[3].title}
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    {helpItems[3].description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group-hover:gap-3 transition-all">
                    Get started
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
            <div></div>
          </div>

          {/* Card 5 - RIGHT (starts from middle of Card 4, smaller height) */}
          <div className="grid lg:grid-cols-2 gap-8 lg:-mt-[300px] mt-8">
            <div></div>
            <motion.a
              href={helpItems[4].link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white hover:bg-transparent rounded-3xl p-8 lg:p-12 min-h-[250px] lg:h-[300px] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${helpItems[4].hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}
                />
                <div className="relative z-10">
                  <div className="text-6xl mb-8">{helpItems[4].icon}</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {helpItems[4].title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold text-lg group-hover:gap-3 transition-all">
                    {helpItems[4].description}
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
