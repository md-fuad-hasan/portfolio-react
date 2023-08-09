import React from "react";
import './Skill.css';

const Skill = (props) =>{
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 text-center mt-5  d-flex justify-content-center align-items-cente ">
            <div className="skill px-5 py-4 rounded d-flex flex-column ">
                <a href={props.link}><img src={props.logo} /></a>
                <span>{props.title}</span>

            </div>
            
            
        </div>
    )
}

export default Skill;