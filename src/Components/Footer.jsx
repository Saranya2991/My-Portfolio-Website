import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative mt-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">
            Saranya Pachaiyappan
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            MERN Stack Developer · Frontend Developer
          </p>
        </div>
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Saranya2991" target="_blank" className="text-gray-400 hover:text-white transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/saranya-pachaiyappan-85533b266/" target="_blank" className="text-gray-400 hover:text-white transition">
             <FaLinkedin />
          </a>

          <a href="mailto:saara2991@gmail.com" className="text-gray-400 hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>

        
        <p className="text-sm text-gray-500 text-center md:text-right">
          © 2026 Saranya. All rights reserved.
        </p>
          </div>
    </footer>
  )
}

export default Footer