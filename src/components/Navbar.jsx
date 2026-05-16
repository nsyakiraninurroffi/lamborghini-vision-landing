import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/specs', label: 'Specifications' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'VIP Contact' },
];

/* ─── Lamborghini Charging Bull SVG ─── */
function BullLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Charging bull silhouette */}
      <path d="M10 55 Q8 48 12 42 Q14 38 18 36 L20 28 Q22 24 26 22 Q28 20 30 22 L28 30 Q30 28 34 26 Q38 24 42 24 Q46 22 52 22 Q58 22 62 24 Q66 26 68 28 L72 24 Q74 22 76 24 Q78 26 80 30 L82 28 Q84 26 86 28 Q90 32 92 36 Q94 40 92 46 Q90 50 86 54 L84 56 Q80 58 76 58 Q72 58 70 56 L66 54 Q62 56 58 56 Q54 58 50 58 Q46 58 42 56 Q38 56 34 54 L30 56 Q26 58 22 58 Q18 58 16 56 Q12 56 10 55 Z" />
      {/* Head detail */}
      <path d="M82 30 Q84 28 86 30 Q88 34 86 38 L84 36 Q82 34 82 30 Z" opacity="0.6" />
      {/* Tail */}
      <path d="M10 52 Q6 48 8 44 Q7 42 10 40 Q8 46 12 50 Z" opacity="0.7" />
      {/* Horn left */}
      <path d="M20 28 Q18 22 14 18 Q16 16 20 18 Q22 20 22 24 Z" opacity="0.8" />
      {/* Horn right */}
      <path d="M80 30 Q82 24 86 20 Q88 18 90 20 Q88 24 84 28 Z" opacity="0.8" />
      {/* Front leg detail */}
      <path d="M72 56 L74 66 Q76 70 72 70 L70 66 L68 54 Z" opacity="0.9" />
      <path d="M78 56 L80 66 Q82 70 78 70 L76 66 L74 54 Z" opacity="0.9" />
      {/* Back leg detail */}
      <path d="M22 56 L20 66 Q18 70 22 70 L24 66 L26 54 Z" opacity="0.9" />
      <path d="M28 56 L26 66 Q24 70 28 70 L30 66 L32 54 Z" opacity="0.9" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-lg shadow-midnight-violet/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo - Lamborghini Image + Text */}
        <NavLink to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
          <img
            src="/assets/images/gallery/logo_lamborghini.png"
            alt="Lamborghini Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_6px_rgba(183,110,121,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(183,110,121,0.6)] transition-all duration-300"
          />
          <span className="font-serif text-lg tracking-[0.2em] text-white group-hover:text-rose-gold transition-colors duration-300">
            LAMBORGHINI
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm tracking-wider font-light transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-rose-gold bg-white/5'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-rose-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-rose-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-dark overflow-hidden"
          >
            <div className="flex flex-col items-center gap-2 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `px-6 py-3 text-sm tracking-widest transition-all duration-300 rounded-full ${
                        isActive
                          ? 'text-rose-gold bg-white/5'
                          : 'text-white/60 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
