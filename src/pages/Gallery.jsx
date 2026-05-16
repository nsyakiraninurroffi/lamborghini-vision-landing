import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const galleryItems = [
  {
    id: 1,
    height: 'h-96',
    label: 'Front View',
    sub: 'Spotlight on Scissor Doors in Deep Plum light',
    src: '/assets/images/gallery/1.jpeg',
  },
  {
    id: 2,
    height: 'h-72',
    label: 'Interior Detail',
    sub: 'Rose Gold stitching on black leather dashboard',
    src: '/assets/images/gallery/2.jpeg',
  },
  {
    id: 3,
    height: 'h-80',
    label: 'Wheel Detail',
    sub: 'Minimalist design with Rose Gold caliper',
    src: '/assets/images/gallery/3.jpeg',
  },
  {
    id: 4,
    height: 'h-96',
    label: 'Side Profile',
    sub: 'Midnight Violet finish under mysterious lighting',
    src: '/assets/images/gallery/4.jpeg',
  },
  {
    id: 5,
    height: 'h-72',
    label: 'Headlight',
    sub: 'Aggressive design cutting through the dark',
    src: '/assets/images/gallery/5.jpeg',
  },
  {
    id: 6,
    height: 'h-80',
    label: 'Rear Exhaust',
    sub: 'Redefining power with subtle plum hints',
    src: '/assets/images/gallery/6.jpeg',
  },
];

function GalleryCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.35, ease: 'easeOut' } }}
      className="gallery-item group relative overflow-hidden rounded-2xl break-inside-avoid"
    >
      <div className={`${item.height} w-full relative bg-midnight-violet overflow-hidden`}>
        
        {/* Gambar Sungguhan */}
        <img 
          src={item.src} 
          alt={item.label} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover dark overlay agar teks terbaca */}
        <div className="absolute inset-0 bg-midnight-violet/20 group-hover:bg-midnight-violet/70 transition-all duration-500 z-10" />

        {/* Glass border */}
        <div className="absolute inset-0 border border-rose-gold/20 group-hover:border-rose-gold/50 rounded-2xl transition-all duration-500 z-20" />

        {/* Center content revealed on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4 text-center z-30">
          <p className="font-serif text-2xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{item.label}</p>
          <p className="text-rose-gold/90 text-sm leading-relaxed max-w-[200px] translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {item.sub}
          </p>
        </div>

        {/* Bottom label (always visible, memudar saat di-hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-midnight-violet/90 via-midnight-violet/50 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-20">
          <p className="text-white/80 text-xs tracking-[0.2em] uppercase">{item.label}</p>
          <p className="text-white/50 text-[11px] mt-1">{item.sub}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <PageTransition>
      <section className="relative min-h-screen bg-midnight-violet pt-32 pb-24 px-6">
        <div className="absolute top-40 left-0 w-[350px] h-[350px] rounded-full bg-deep-plum/15 blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-[300px] h-[300px] rounded-full bg-rose-gold/5 blur-[100px]" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-rose-gold text-xs tracking-[0.3em] uppercase mb-4">
              Visual Poetry
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Gallery
            </h1>
            <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
              Every angle reveals a new dimension of beauty and engineering prowess.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="gallery-grid columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}