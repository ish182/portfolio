import resume from "../assets/resume.pdf"

function Resume() {
  return (
    <section className="py-24 px-6 bg-slate-950">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Resume
        </h2>

        <p className="text-slate-300 mb-8">
          Download my resume to explore my technical skills,
          projects, certifications, and experience.
        </p>

        <a
          href={resume}
          download
          className="inline-block px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
        >
          Download Resume
        </a>

      </div>

    </section>
  )
}

export default Resume