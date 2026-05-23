import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-sky-400 mb-4">
            Computer Science Engineering Student
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              Isha
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Focused on Software Engineering, Cloud Computing,
            scalable backend systems, and modern web development.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-sky-400 transition"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 blur-3xl opacity-40"></div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero