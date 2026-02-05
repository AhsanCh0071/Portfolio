import { motion } from "framer-motion";
import RevealWrapper from "../components/RevealWrapper";

const skills = {
  Frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  Tools: ["Git & GitHub", "Postman", "AWS", "VS Code"],
};

const Skills = () => {
  return (
    <RevealWrapper>
    <section id="skills" className="py-16 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([title, list], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-slate-200 p-6 rounded-xl border border-gray-800 hover:border-blue-900 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
            <ul className="space-y-2 text-slate-700">{list.map(skill => <li key={skill}>• {skill}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
    </RevealWrapper>
  );
};

export default Skills;
