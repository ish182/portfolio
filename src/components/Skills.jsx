const skills = [
  "Java",
  "Spring Boot",
  "React.js",
  "MySQL",
  "Cloud Computing",
  "Git",
  "GitHub",
  "MS Excel",
  "Google Sheets",
]

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 transition duration-300 hover:scale-105"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills