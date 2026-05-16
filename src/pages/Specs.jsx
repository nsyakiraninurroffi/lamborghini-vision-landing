import { motion } from 'framer-motion';
import { Zap, Wind, Cpu, Gauge, Shield, Battery, Eye, Crown } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const specs = [
  { icon: Zap, title: 'V12 Hybrid Power', value: '1,015 HP', description: 'Twin-turbo V12 combined with triple electric motors.', span: 'md:col-span-2' },
  { icon: Gauge, title: 'Top Speed', value: '355 km/h', description: 'Electronically limited. Unleash on the track.', span: '' },
  { icon: Wind, title: 'Aero Dynamics', value: '360 kg', description: 'Active aero generating 360kg downforce at 250km/h.', span: 'md:row-span-2' },
  { icon: Crown, title: 'Feminine Dark Aesthetics', value: 'Bespoke', description: 'Dark chrome, rose-gold stitching, matte midnight finishes.', span: '' },
  { icon: Battery, title: 'Hybrid Range', value: '13 km EV', description: 'Pure electric city mode with supercapacitor tech.', span: '' },
  { icon: Cpu, title: 'Digital Cockpit', value: 'AI-Driven', description: 'Holographic HUD with predictive AI driving modes.', span: '' },
  { icon: Shield, title: 'Carbon Fiber', value: 'Monocoque', description: 'Full carbon fiber chassis with RTM forged composite.', span: '' },
  { icon: Eye, title: 'Vision System', value: '360°', description: 'Lidar-enhanced awareness with night vision.', span: 'md:col-span-2' },
];

function SpecCard({ icon: Icon, title, value, description, span, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.08, transition: { duration: 0.15, ease: 'easeOut' } }}
      className={`glass rounded-2xl p-8 glow-rose hover:glow-rose-intense transition-all duration-300 group relative overflow-hidden ${span}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-deep-plum/0 to-rose-gold/0 group-hover:from-deep-plum/10 group-hover:to-rose-gold/5 transition-all duration-300 rounded-2xl" />
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="w-11 h-11 rounded-xl bg-deep-plum/30 border border-rose-gold/20 flex items-center justify-center group-hover:bg-deep-plum/50 transition-all duration-300">
            <Icon size={20} className="text-rose-gold" />
          </div>
          <span className="text-gradient font-serif text-2xl md:text-3xl font-bold">{value}</span>
        </div>
        <h3 className="font-serif text-lg text-white mb-2 group-hover:text-rose-gold/90 transition-colors duration-300">{title}</h3>
        <p className="text-white/35 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Specs() {
  return (
    <PageTransition>
      <section className="relative min-h-screen bg-midnight-violet pt-32 pb-24 px-6">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-deep-plum/15 blur-[120px]" />
        <div className="absolute bottom-40 left-0 w-[300px] h-[300px] rounded-full bg-rose-gold/5 blur-[100px]" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-4">Technical Excellence</p>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Specifications</h1>
            <p className="text-white/35 max-w-xl mx-auto leading-relaxed">Every number tells a story of engineering obsession.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {specs.map((spec, i) => (
              <SpecCard key={spec.title} {...spec} index={i} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16 glass rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: '0-100 km/h', value: '2.8s' },
                { label: '0-200 km/h', value: '8.6s' },
                { label: 'Weight', value: '1,550 kg' },
                { label: 'Cylinders', value: '12' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gradient font-serif text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-white/30 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
