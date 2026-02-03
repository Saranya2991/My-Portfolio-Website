import Photo from "../assets/Photo.jpg"
import { useEffect } from "react";
function About(){
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
    return(
        <div className="text-white w-full mt-28">
            <h1 className="mt-12 text-3xl font-bold text-blue-500">About Me</h1>
          
             
            <p className="text-justify p-8">I build responsive and scalable web applications using modern full-stack technologies including MongoDB, Express.js, React, Node.js, JavaScript, HTML, CSS, and Tailwind CSS. I focus on writing clean, maintainable code and creating user-friendly interfaces that deliver strong user experiences.

I have hands-on experience developing real-world projects such as e-commerce platforms, task management systems, and API-driven applications. My technical strengths include CRUD operations, REST API integration, React Hooks, state management, and responsive UI development.

I am detail-oriented, adaptable, and continuously learning new technologies. I enjoy collaborating with teams, solving problems, and contributing to high-quality digital products. Open to opportunities where I can grow my skills and add value to development teams.</p>
         
        <h2 className="mt-8 text-3xl font-bold text-blue-500">Technical Skills</h2>
        <div className=" mt-3 p-5 flex gap-6 flex-wrap justify-center">
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          HTML
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          CSS
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          JavaScript
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          React JS
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          Node.js
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          Express.js
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          MongoDB
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          Git 
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          GitHub
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          Vercel
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          Render
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          FireBase
        </button>
        <button type="button"
          className="px-6 py-2 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          VScode
        </button>
        </div>
        
        </div>
        
    )
}
export default About