import React from "react";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import About from "./About/About";

const Body = () =>{
    return(
        <div className="container">
            
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            

        </div>
    )
}

export default Body;