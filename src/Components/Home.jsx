import Photo from "../assets/Photo.jpg"
import TextType from './TextType';
import { Link } from "react-router-dom"
import Resume from "../assets/Resume.pdf"
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";


function Home(){

    return(
        <div className="pt-24">
        <div className="text-white block md:flex mt-10 lg:mt-20">
            <div className="w-2/3 text-left ml-20">
                <h1 className="text-xl font-semi-bold">Hello, I am <span className="text-2xl font-bold text-blue-600">Saranya Pachaiyappan</span></h1>
                <TextType className="text-3xl font-bold mt-2 text-fuchsia-600"
                 text={["MERN Stack Developer", "Full Stack Developer", "Frontend Developer", "Web Developer"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                <p className="line-start mt-3">I create clean, responsive, and intuitive web experiences using modern web technologies. I enjoy building full-stack applications with MongoDB, Express.js, React, Node.js, JavaScript, HTML, CSS, and Tailwind CSS, focusing on performance, usability, and scalability.

I love turning ideas into real products through well-structured code, seamless API integration, and thoughtful UI design. Always curious and continuously learning, I aim to build digital solutions that are simple, effective, and impactful.</p>
            <button type="button"
          className="px-6 py-2 mt-5 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
          <Link to ={"/about"}>More About Me</Link>
        </button>
        <a href={Resume} target="_blank"><button type="button"
          className="px-6 py-2 mt-5 ml-4 cursor-pointer rounded-full text-white font-semibold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-indigo-300 hover:shadow-xl hover:scale-105 transition-all">
         View CV
        </button></a>
            
            </div>
            <div className="relative flex justify-center items-center w-2/3 mt-24 ml-28 md:ml-0 md:mt-0">
                <div className="absolute">
                    <div className="flex w-[250px] h-[250px] justify-center items-center relative">
                         <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute "></div>                
                         <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute rotate-90"></div>
                         <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute rotate-180"></div>
                    </div>
                </div>
                    <img className="w-[250px] h-[250px] rounded-full" src={Photo}></img>
            </div>
            </div>
           <About />
           <Project />
           <Contact />
        </div>
        
    )
}
export default Home