import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, ArrowRight, Zap, Shield, Gauge } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

/* ─── Splash / Gatekeeper ─── */
function SplashScreen({ onEnter }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] w-full h-screen flex flex-col items-center justify-center bg-midnight-violet overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative text-center"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        >
          <img src="/assets/images/gallery/logo_lamborghini.png" alt="Lamborghini Logo" className="w-24 md:w-32 h-auto mb-6 object-contain mx-auto" />
        </motion.div>

        <h1 className="font-serif text-3xl md:text-5xl text-white mb-4 tracking-wider">
          LAMBORGHINI
        </h1>
        <p className="text-white/30 text-sm tracking-[0.3em] uppercase mb-12">
          Beyond Extraordinary
        </p>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-4 rounded-full glass animate-pulse-glow transition-all duration-500 hover:glow-rose-intense"
        >
          <span className="flex items-center gap-3 text-rose-gold text-sm tracking-[0.2em] uppercase font-light">
            <Play size={16} className="fill-rose-gold" />
            Enter the Experience
          </span>

          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-rose-gold/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 text-white/15 text-xs tracking-widest"
      >
        Audio Experience Enabled
      </motion.p>
    </motion.div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ icon: Icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-8 glow-rose hover:glow-rose-intense transition-shadow duration-500 group"
    >
      <div className="w-12 h-12 rounded-xl bg-deep-plum/30 border border-rose-gold/20 flex items-center justify-center mb-6 group-hover:bg-deep-plum/50 transition-colors duration-300">
        <Icon size={22} className="text-rose-gold" />
      </div>
      <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  const [splashVisible, setSplashVisible] = useState(true);
  const videoRef = useRef(null);

  const handleEnter = () => {
    window.scrollTo(0, 0);
    setSplashVisible(false);
  };

  // When splash fades out, play the video with sound
  useEffect(() => {
    if (!splashVisible && videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      video.volume = 0.6;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback: play muted if autoplay with sound is blocked
          video.muted = true;
          video.play();
        });
      }
    }
  }, [splashVisible]);

  return (
    <PageTransition>
      {/* Splash Screen Overlay */}
      <AnimatePresence>
        {splashVisible && <SplashScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {/* ─── Hero Section ─── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/assets/videos/animasi_mobil.mp4"
          loop
          playsInline
          muted
          preload="auto"
          className="absolute inset-0 w-full h-screen object-cover object-center"
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Bottom gradient for blending */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-midnight-violet to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatePresence>
            {!splashVisible && (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              >
                <motion.p
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="text-rose-gold text-xs md:text-sm uppercase tracking-[0.3em] mb-6"
                >
                  Italian Masterpiece
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
                >
                  Elegance,<br />
                  <span className="text-gradient">Unleashed.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="text-white/50 text-base md:text-lg max-w-lg mx-auto mb-10 font-light leading-relaxed"
                >
                  Designed for those who turn heads without trying.
                  Power sculpted in elegance, born in the heart of Italy.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
                >
                  <Link to="/specs">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full bg-rose-gold/10 border border-rose-gold/40 text-rose-gold text-sm tracking-widest uppercase hover:bg-rose-gold/20 transition-all duration-300 flex items-center gap-2"
                    >
                      Discover More
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full glass text-white/60 text-sm tracking-widest uppercase hover:text-white transition-all duration-300"
                    >
                      VIP Inquiry
                    </motion.button>
                  </Link>
                  <Link to="/gallery">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-full glass text-white/60 text-sm tracking-widest uppercase hover:text-white transition-all duration-300"
                    >
                      Gallery
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll indicator */}
          {!splashVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute bottom-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown size={24} className="text-rose-gold/40" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="relative bg-midnight-violet py-32 px-6">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-deep-plum/10 blur-[150px]" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-4">
              Why Lamborghini
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Beyond Performance
            </h2>
            <p className="text-white/35 max-w-xl mx-auto leading-relaxed">
              Every detail meticulously crafted. Every curve aerodynamically perfected.
              Every drive, an unforgettable experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Lightning Power"
              description="V12 hybrid engine delivering over 1,000 HP of raw, instantaneous power. From 0 to 100 in under 2.8 seconds."
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Sculpted Design"
              description="Inspired by fighter jets and haute couture. Carbon fiber monocoque chassis with active aerodynamics."
              delay={0.25}
            />
            <FeatureCard
              icon={Gauge}
              title="Digital Soul"
              description="AI-driven drive modes, holographic HUD, and a cockpit that adapts to your every command."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative bg-midnight-violet py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 md:p-16 glow-rose relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-deep-plum/20 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-rose-gold/10 blur-[60px]" />

            <div className="relative">
              <p className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-4">
                Exclusive Access
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Ready to Own the Road?
              </h2>
              <p className="text-white/40 max-w-md mx-auto mb-10 leading-relaxed">
                Join our VIP concierge program and be the first to experience 
                the next generation of Italian automotive art.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full bg-rose-gold text-midnight-violet text-sm tracking-widest uppercase font-semibold hover:bg-rose-gold/90 transition-all duration-300"
                >
                  Request VIP Access
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
