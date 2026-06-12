import { FaBars } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
          Isha.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-sky-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-sky-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-sky-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-sky-400 transition">Contact</a></li>
        </ul>

        <FaBars className="md:hidden text-2xl" />
      </div>
    </nav>
  )
}

export default Navbar