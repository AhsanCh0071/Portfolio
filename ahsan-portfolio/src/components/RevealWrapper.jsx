import { motion } from "framer-motion";

const RevealWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }} // ← play every time section comes into view
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
