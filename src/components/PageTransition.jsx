import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    rotateX: -5,
    filter: 'blur(6px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    y: -30,
    rotateX: 3,
    filter: 'blur(6px)',
  },
};

const pageTransition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
};

const exitTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      style={{ perspective: 1200 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
