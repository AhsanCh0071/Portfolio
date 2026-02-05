import RevealWrapper from "../components/RevealWrapper";

const About = () => {
  return (
    <section id="about" className="py-10 px-4 sm:px-6 bg-slate-200 rounded-2xl">
      <RevealWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">
            About Me
          </h2>

          <p className="text-slate-700 leading-relaxed text-center md:text-justify">
            I am a Software Engineer and fresh graduate with hands-on experience in
            MERN Stack development gained through academic and self-driven projects.
            I focus on building user-friendly, scalable, and performance-oriented
            web applications.
            <br />
            I enjoy turning ideas into real products, learning new technologies, and
            continuously improving my development skills. Currently, I am actively
            seeking junior developer roles, internships, or freelance opportunities,
            both remote and onsite.
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
};

export default About;