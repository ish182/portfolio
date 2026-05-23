import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Cloud-Based Storage System",

    description:
      "Developed a secure cloud-based storage system using Java Spring Boot and MySQL with RBAC authentication and chunk-based file sharing.",

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "RBAC",
      "Authentication",
    ],

    github: "https://github.com/yourusername/cloud-storage",

    live: "#",
  },

  {
    title: "E-Commerce Website",

    description:
      "Built a responsive e-commerce platform with authentication, product management, and shopping cart functionality.",

    tech: [
      "React",
      "JavaScript",
      "CSS",
      "API",
    ],

    github: "https://github.com/yourusername/ecommerce",

    live: "#",
  },

  {
    title: "Student Management System",

    description:
      "Created a management system for maintaining student records with CRUD operations and database integration.",

    tech: [
      "Java",
      "MySQL",
      "CRUD",
      "Database",
    ],

    github: "https://github.com/yourusername/student-management",

    live: "#",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects