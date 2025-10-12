'use client';
import { motion } from 'framer-motion';
import timelineData from '@/content/timelinepro.json';

export default function TimelinePro() {

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#f5f1ed]">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-32">
          {timelineData.timelineEvents.map((item, index) => (
            <div key={item.year} className="grid grid-cols-12 gap-8">
              {/* LEFT SIDE - Year */}
              <div className="col-span-12 md:col-span-4 relative">
                {/* Vertical Timeline Line */}
                {index === 0 && (
                  <div className="hidden md:block absolute left-8 top-0 bottom-[-8rem] w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-yellow-400" style={{ height: '200%' }}></div>
                )}
                {index > 0 && index < timelineData.timelineEvents.length && (
                  <div className="hidden md:block absolute left-8 top-[-8rem] bottom-[-8rem] w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-yellow-400"></div>
                )}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-8 w-3 h-3 bg-white border-2 border-orange-500 rounded-full -translate-x-[5px]"></div>

                  {/* Year */}
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                      {item.year}
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE - Content Card */}
              <div className="col-span-12 md:col-span-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Content Card */}
                  <div className="bg-[#faf8f6] rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 -ml-0 md:-ml-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Text Content */}
                      <div className="flex-1">
                        {/* Content Paragraphs */}
                        <div className="space-y-4">
                          {item.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="text-slate-700 leading-relaxed text-base">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Image with caption if present */}
                        {item.image && (
                          <div className="mt-6">
                            <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl overflow-hidden shadow-lg">
                              <div className="aspect-video flex items-center justify-center relative">
                                {/* Photo Placeholder Icon */}
                                <svg
                                  className="w-20 h-20 text-slate-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            {item.imageCaption && (
                              <p className="text-sm text-slate-600 mt-3 italic">
                                {item.imageCaption}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Extra Content if present */}
                        {item.extraContent && (
                          <div className="mt-6 space-y-4">
                            {item.extraContent.map((paragraph, eIndex) => (
                              <p key={eIndex} className="text-slate-700 leading-relaxed text-base">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Icon on the right side of card */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 ${item.iconBg} rounded-2xl flex items-center justify-center text-4xl shadow-md`}>
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
