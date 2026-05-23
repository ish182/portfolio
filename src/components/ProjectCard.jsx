import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-sky-400 transition"
    >

      <div className="h-52 bg-gradient-to-r from-sky-500/20 to-violet-500/20"></div>

      <div className="p-6">

        <h3 className="text-2xl font-semibold mb-4">
          {title}
        </h3>

        <p className="text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-slate-700 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 transition"
          >
            <FiExternalLink />
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  )
}

export default ProjectCard