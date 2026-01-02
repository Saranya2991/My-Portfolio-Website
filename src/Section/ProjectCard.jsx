function ProjectCard({title, desc, tags, website, github}){
        
    return(
        
        <div className="p-1 bg-gradient-to-r from-purple-500 via-pink-600 to-blue-500">
            
        <div className="p-1 bg-black">  
        <h1 className="text-xl font-bold mt-3 text-red-600">{title}</h1>
        <p className="text-justify mt-1 p-4">{desc}</p>
        <div className="grid grid-cols-3 gap-2 mt-1 p-3 text-sm">
            {tags.map((tag, index)=>(
                <button key={index} className="p-1 px-2 bg-blue-300 rounded">{tag}</button>
            ))}
        
        
        </div>
        <div className="mt-3 mb-2">
            <a href={website} target="_blank"><button className="px-6 py-2 ml-3 cursor-pointer rounded text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-sm shadow-indigo-300 hover:shadow-xl">Live Demo</button></a>
            <a href={github} target="_blank"><button className="px-6 py-2 ml-3 cursor-pointer rounded text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-sm shadow-indigo-300 hover:shadow-xl">Source Code</button></a>
        </div>
        </div>
         </div>
    )
}
export default ProjectCard