import React from "react";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

const Body = () =>{
    return(
        <div className="container">
            
            <Hero />
            <Skills />
            <Project />

        </div>
    )
}

export default Body;