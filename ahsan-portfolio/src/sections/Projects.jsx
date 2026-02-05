import { motion } from "framer-motion";
import RevealWrapper from "../components/RevealWrapper"; // ← ADD THIS

const projects = [
  { title: "MERN Task Manager", desc: "A full-stack task management system where users can create, update, delete, and mark tasks as completed. Tasks are stored securely in the database with a clean and responsive user interface.", tech:"MongoDB, Express.js, React, Node.js, Tailwind CSS" },
  { title: "AI Expense Tracker", desc: "A smart expense tracking application that allows users to record monthly expenses across multiple categories. The app visualizes spending patterns using bar charts and pie charts, while AI-generated insights help users optimize their expenditures.", tech:"MongoDB, Express.js, React, Node.js, Tailwind CSS" },
  { title: "Real Estate Backend", desc: "A role-based RESTful backend system for property management. Supports buyers, sellers, and admin roles, property listing for rent or sale, location-based filtering using Google Maps, and property status updates.",tech:"Node.js, Express.js, MongoDB, Google Maps API" },
  { title: "AgroConnect (FYP)", desc: "A MERN-based agriculture platform connecting farmers with consumers. Features include crop listing, AI-powered crop disease detection through image analysis, weather updates, order tracking, payments, and an admin panel.",tech:"Built the complete frontend using React and Tailwind CSS." },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-slate-200">
      <RevealWrapper>
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Projects</h2>
      </RevealWrapper>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
            whileHover={{ scale: 1, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            className="bg-slate-200 p-6 rounded-xl border border-gray-800 hover:border-blue-700 transition cursor-pointer"
          >
            <h3 className="text-xl text-blue-900 font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-700 text-sm">{project.desc}</p>
            <p className="text-slate-700 text-sm"><span className="text-lg text-blue-900 font-semibold mt-2">Tech : </span>{project.tech}</p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
