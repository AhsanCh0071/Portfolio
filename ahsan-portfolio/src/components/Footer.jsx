const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-6 px-4 text-center text-gray-500 mt-12">
      <p className="text-sm">© {new Date().getFullYear()} Ahsan Ullah. All rights reserved.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-3">
        <a href="https://github.com/AhsanCh0071" className="hover:text-indigo-400 transition" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/ahsan-ullah-935b71356" className="hover:text-indigo-400 transition" target="_blank">LinkedIn</a>
        <a href="mailto:ahsanch146@gmail.com" className="hover:text-indigo-400 transition">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
