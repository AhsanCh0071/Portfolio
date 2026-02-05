import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 pt-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-900">Ahsan Ullah</span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-6">
            Software Engineer | MERN Stack Developer
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            I design and build clean, responsive, and scalable web applications
            using the MERN stack. Passionate about solving real-world problems
            through modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/Ahsan_Ullah_CV.pdf"
              download
              className="px-6 py-3 bg-blue-900 hover:bg-blue-700 rounded-lg transition text-white"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-700 rounded-lg transition text-white"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-900 rounded-lg hover:border-blue-700 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-500 blur-2xl opacity-20"></div>
            <img
              src={profile}
              alt="Ahsan Ullah"
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-blue-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
