import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Contact</h2>
        <p className="text-slate-700 mb-2">📧 email.ahsanch146@gmail.com</p>
        <p className="text-slate-700">
          <a href="https://github.com/AhsanCh0071" className="hover:text-blue-700" target="_blank">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/ahsan-ullah-935b71356" className="hover:text-blue-700" target="_blank">LinkedIn</a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
