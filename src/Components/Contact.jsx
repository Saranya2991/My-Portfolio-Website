import { useState, useEffect } from "react"
import Photo from "../assets/Photo.jpg"

function Contact(){
       const [user,setUser] = useState("")
       const [email,setEmail] = useState("")
       const [msg,setMsg] = useState("")

    function handleuser(e){
        setUser(e.target.value)
        
    }   
    function handleemail(e){
        setEmail(e.target.value)
    } 
    function handlemsg(e){
        setMsg(e.target.value)
    }     
    
    function send(e){
            e.preventDefault()
            console.log("Login Successfully")
            setUser("")
            setEmail("")
            setMsg("")
        }

        useEffect(() => {
            window.scrollTo({
              top: 0,
              behavior: "instant",
            });
          }, []);
    return(
        
        <div className="text-white w-3/5 md:w-2/4 lg:w-full mx-auto mt-24">
             
            <h1 className="text-3xl font-bold text-blue-500 mb-10">Contact Me</h1>
            <div className="block lg:flex gap-20 justify-center">
            <div className="font-bold text-xl">
            <h2 className="bg-blue-300 border rounded px-20 p-2 my-3 hover:bg-pink-400">Saranya Pachaiyappan</h2>
            <h2 className="bg-blue-300 border rounded px-20 p-2 my-3 hover:bg-pink-400">Frontend Developer</h2>
            <h2 className="bg-blue-300 border rounded px-20 p-2 my-3 hover:bg-pink-400">saara2991@gmail.com</h2>
            <h2 className="bg-blue-300 border rounded px-20 p-2 my-3 hover:bg-pink-400">+91 9894564380</h2>
            </div>
            <div>
            <input value={user} onChange={handleuser} className="border bg-black rounded p-2 mt-3 pr-48 hover:border-pink-600" type="text" placeholder="Username"></input><br></br>
            <input value={email} onChange={handleemail} className="border bg-black rounded p-2 mt-3 pr-48 hover:border-pink-600" type="email" placeholder="Email"></input><br></br>
            <textarea value={msg} onChange={handlemsg} className="border bg-black rounded p-2 mt-3 pr-52 pb-10 hover:border-pink-600" placeholder="Message"></textarea><br></br>
            <button onClick={send} className="px-6 py-2 ml-2 mt-5 cursor-pointer rounded text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-sm shadow-indigo-300 hover:shadow-xl">Submit</button>
            </div>
        </div>
        </div>
    
    )
}
export default Contact