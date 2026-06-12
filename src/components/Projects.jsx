import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"

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

    github: "https://github.com/ish182/secure-cloud-storage",

   overview:
  "Developed a secure cloud-based storage system using Java Spring Boot and MySQL with Role-Based Access Control (RBAC), authentication, and chunk-based file sharing.",

features: [
  "Role-Based Access Control (RBAC)",
  "JWT Authentication",
  "Chunk-based File Storage",
  "Secure File Sharing",
  "Database Integration",
],

challenges:
  "Implemented secure role-based permissions while designing an efficient chunk-based storage mechanism for large file handling.",

learned:
  "Strengthened my knowledge of backend architecture, REST APIs, authentication, authorization, and scalable database design.",
  },

  {
    title: "E-Commerce Website",

    description:
      "Built a responsive e-commerce platform with authentication, product management, and shopping cart functionality.",

    tech: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "CSS",
      "API",
    ],

    github: "https://github.com/ish182/Ecommerce",

    overview:
  "Developed a full-stack e-commerce web application using Java Spring Boot and MySQL. The application enables users to browse products, manage shopping carts, authenticate securely, and place orders through a responsive interface.",

features: [
  "User Authentication",
  "Product Catalog Management",
  "Shopping Cart Functionality",
  "REST API Integration",
  "Responsive User Interface",
],

challenges:
  "Designed a secure authentication system while integrating backend APIs with the frontend to provide a smooth shopping experience.",

learned:
  "Improved my understanding of full-stack development, REST API integration, backend business logic, database management, and responsive web design.",
  },

  {
   title: "Event Management System",

   description: "Developed an event management system to organize events, manage registrations, track attendees, and handle event scheduling with database integration.",
    tech: [
      "Java",
      "MySQL",
      "CRUD",
      "Database",
    ],

    github: "https://github.com/ish182/EventManagement",

    overview:
  "Built an event management system using Java and MySQL to streamline event scheduling, participant registration, attendee management, and event record maintenance through an organized database-driven application.",

features: [
  "Event Scheduling",
  "Participant Registration",
  "CRUD Operations",
  "Database Integration",
  "Attendee Management",
],

challenges:
  "Designed an efficient database structure to manage event information while implementing reliable CRUD operations for smooth data management.",

learned:
  "Enhanced my knowledge of database design, CRUD operations, Java application development, and building structured management systems.",
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
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
              project={project}
              onOpen={setSelectedProject}
            />
          ))}

        </div>

      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects