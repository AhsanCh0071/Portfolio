import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-400/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold text-blue-900">Ahsan.dev</h1>
        <div className="flex gap-4 text-slate-700 sm:gap-6 text-sm">
          {["home", "about", "skills", "projects", "contact"].map(section => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="hover:text-blue-700 cursor-pointer transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
