import ProjectCard from "../Section/ProjectCard"
function Project(){
        const navlink = [
          
          {
            title : "Udemy Clone Website",
            desc : "Developed a frontend-only clone of the Udemy platform using HTML5, CSS3, and Flexbox. Implemented a responsive and visually consistent layout, including course cards, navigation menus, and interactive buttons. Focused on clean structure, user-friendly design, and replicating the look and feel of the real Udemy interface, gaining hands-on experience in frontend development and UI design.", 
            tags : ["HTML", "CSS"],
            website : "https://saranya2991.github.io/Udemy-Clone-Project",
            github : "https://github.com/Saranya2991/Udemy-Clone-Project"
          },
          {
            title : "Nostra--E-Commerce-Website",
            desc : "Developed a multi-page e-commerce website with Home, Collection, and Contact pages using HTML, Tailwind CSS, Grid, and JavaScript. Implemented interactive product filtering with search and checkboxes using DOM manipulation. Focused on responsive design and clean UI layout, ensuring a seamless user experience across devices while demonstrating practical skills in frontend web development.", 
            tags : ["HTML", "Tailwind CSS","JavaScript"],
            website : "https://saranya2991.github.io/Nostra---E-Commerce-Website",
            github : "https://github.com/Saranya2991/Nostra---E-Commerce-Website"
          },
          {
            title : "Task Management App",
            desc : "Built a responsive task management application using React, Tailwind CSS, and HTML, featuring add, edit, delete, and complete task functionality. Implemented reusable components, state management with Hooks, real-time task filtering, and input validation and Focused on user-friendly interface and seamless interaction, frontend skills.", 
            tags : ["HTML", "CSS","JavaScript","React"],
            website : "https://task-management-app-eta-virid.vercel.app/home",
            github : "https://github.com/Saranya2991/Task-Management-App"
          },
          {
            title : "Weather App",
            desc : "Developed a responsive weather application using React, Axios, JavaScript, and CSS that fetches real-time weather data from APIs. Implemented search functionality, dynamic UI updates, and a clean, user-friendly interface, demonstrating skills in API integration, frontend development, and responsive design.", 
            tags : ["HTML", "CSS","JavaScript","React","Axios"],
            website : "https://react-weather-app-ten-mu.vercel.app",
            github : "https://github.com/Saranya2991/React-Weather-App"
          },
          {
            title : "Movie App",
            desc : "Developed a movie browsing application using React, JavaScript, and CSS, fetching data from a public API. Implemented search functionality, category filtering, and managed state with React Hooks to provide a responsive and visually appealing UI, demonstrating skills in API integration, and dynamic user interfaces.", 
            tags : ["HTML", "CSS","JavaScript","React","API Integration"],
            website : "https://movie-app-weld-nine-61.vercel.app",
            github : "https://github.com/Saranya2991/Movie-App"
          },
          {
            title : "E-Commerce Website",
            desc : "This project is a fully functional E-Commerce Web Application developed as the final assignment for the Full Stack Program. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and provides a complete online shopping experience, including product browsing, user authentication, shopping cart functionality, order management.", 
            tags : ["HTML", "CSS","JavaScript","MERN Stack"],
            website : "https://e-commerce-frontend-r9o9.onrender.com",
            github : "https://github.com/Saranya2991/E-Commerce-frontend"
          },
        ]

    return(
        
      <>
       <div className="text-white mt-24">
        <h1 className="text-3xl font-bold text-blue-500 mt-6">My Projects</h1>
        <div className="text-white p-2 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        
       
        {navlink.map((item, index) => (
          
          <ProjectCard
          key={index}
          title={item.title}
          desc={item.desc}
          tags={item.tags}
          website={item.website}
          github={item.github}
         />
    
        ))}
        
       </div>
        
        </div>
        </>
    )
}
export default Project