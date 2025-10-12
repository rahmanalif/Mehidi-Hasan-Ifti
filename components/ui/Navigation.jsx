'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import navigationData from '@/content/navigation.json';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 50px, collapse the button
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      router.push('/');
    }
  };

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
        {/* Navigation Bar */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-[40vw]"
        >
          <div
            className="bg-white/10 backdrop-blur-2xl shadow-xl shadow-black/10 border border-white/20 rounded-full px-6 py-3 transition-all duration-500"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              onClick={handleLogoClick}
              className="text-lg md:text-xl font-bold font-mono cursor-pointer text-slate-800 transition-colors flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {navigationData.logo}<span className="text-indigo-600">.</span>
            </motion.a>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navigationData.links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative text-slate-700 hover:text-slate-900 transition-all cursor-pointer px-4 py-2 rounded-full font-medium text-sm group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glassy hover effect */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                    }}
                  />
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/20 rounded-full text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            </div>
          </div>
        </motion.nav>

        {/* Get in Touch Button - Fixed Width Container */}
        <motion.div
          className="hidden md:block relative"
          style={{ width: '180px', height: '56px' }}
          animate={{
            marginLeft: isScrolled ? '-40px' : '10px',
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.a
            href={navigationData.ctaButton.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(navigationData.ctaButton.href);
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              width: isScrolled ? '56px' : '180px',
              left: isScrolled ? '50%' : '0',
              x: isScrolled ? '-50%' : '0',
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-0 flex items-center justify-center h-14 bg-white/10 hover:bg-white/20 backdrop-blur-2xl rounded-full text-slate-800 hover:text-slate-900 cursor-pointer shadow-xl shadow-black/10 border border-white/20 overflow-hidden"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
            aria-label={navigationData.ctaButton.text}
          >
            {/* Content */}
            <div className="flex items-center justify-center px-5">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <motion.span
                animate={{
                  opacity: isScrolled ? 0 : 1,
                  width: isScrolled ? 0 : 'auto',
                  marginLeft: isScrolled ? 0 : 8,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-semibold text-sm whitespace-nowrap overflow-hidden"
              >
                {navigationData.ctaButton.text}
              </motion.span>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              {navigationData.links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-2xl font-semibold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer px-8 py-3 rounded-full hover:bg-white/50"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}