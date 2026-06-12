import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { FaTimes, FaTools, FaCheckCircle, FaCode, FaGraduationCap } from "react-icons/fa"

function ProjectModal({ project, onClose }) {
    useEffect(() => {
  if (project) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return () => {
    document.body.style.overflow = "auto"
  }
}, [project])
  return (
    <AnimatePresence>
      {project && (
        <motion.div
           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900/95 shadow-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <FaTimes size={18} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white border-b border-slate-700 pb-4">
                {project.title}
              </h2>

              <p className="mt-5 text-slate-400 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                <FaTools className="text-sky-400" />
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-slate-600 bg-slate-800 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                <FaCheckCircle className="text-green-400" />
                Key Features
              </h3>

              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />

                    <span className="text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                <FaCode className="text-orange-400" />
                Challenges
              </h3>

              <p className="leading-relaxed text-slate-300">
                {project.challenges}
              </p>
            </div>

            {/* Learning */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
                <FaGraduationCap className="text-violet-400" />
                What I Learned
              </h3>

              <p className="leading-relaxed text-slate-300">
                {project.learned}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal