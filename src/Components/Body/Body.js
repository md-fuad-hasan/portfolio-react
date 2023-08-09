import React from "react";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "../Footer/Contact";

const Body = () =>{
    return(
        <div className="container">
            
            <Hero />
            <Skills />
            <Project />
            <Contact />
            

        </div>
    )
}

export default Body;