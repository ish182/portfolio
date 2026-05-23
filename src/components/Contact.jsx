import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-slate-300 mb-12">
          Interested in collaborating, internships,
          or project opportunities? Let's connect.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="mailto:ishaabhaandari@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 transition duration-300 hover:scale-105"
          >
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://github.com/ish182"
            target="_blank"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 transition duration-300 hover:scale-105"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/isha-bhandari-b473b732a/"
            target="_blank"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 transition duration-300 hover:scale-105"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact