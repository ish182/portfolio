import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Certifications from "./components/Certifications"
import Activities from "./components/Activities"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Activities />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App