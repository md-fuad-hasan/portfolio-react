import React from "react";
import './About.css';
import Frontend from '../../../Assets/Logos/frontend.png';
import Backend from '../../../Assets/Logos/backend1.png';
import Fullstack from '../../../Assets/Logos/fullstack.jpg';

const About = () =>{
    return(
        <div className="my-5" id="about">
            <div class="container p-4">
            <div class="row pb-5">
                <div class="col-md-2">

                </div>
                <div className="col-md-8 text-center">
                <h1  className="pt-4">About Me</h1>
                <p className="py-4 px-0">Dedicated to lifelong learning, passionate about problem-solving. Committed to being updated with technologies, Interested in a team-oriented environment, and focused on analytical skills. Seeking a Web developer position to grow skills. I am trying to develop some web application which are may be client side or server side or both.</p>
                </div>
                <div className="col-md-2">

                </div>
            </div>

            <div className="row">
                <div className="col-lg-4">
                <div className="service-card card border-0">
                    <div className="service-logo">
                    <img src={Frontend} className="card-img-top img-thumbnail" alt="Fronend"/>
                    
                    </div>
                    <div className="service-title">
                        <h3>Frontend Developer</h3>
                    </div>
                    <div className="service-card-content">
                    <p>I recognized with some technologies such as HTML, CSS, Bootstrp, TailwindCSS, JavaScript, ReactJS.</p>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                <div className="service-card card border-0">
                    <div className="service-logo">
                    <img src={Backend}  className="card-img-top img-thumbnail" alt="Backend "/>
                    </div>
                    <div className="service-title">
                        <h3>Backend Developer</h3>
                    </div>
                    <div className="service-card-content">
                    <p>I am familier with server side of the web application such as Django Rest API, and relational database (MySql).</p>
                    </div>
                </div>
                </div>

                <div className="col-lg-4">
                    <div className="service-card card border-0">
                    <div className="service-logo">
                    <img src={Fullstack}  className="card-img-top img-rounded " alt="Fullstack"/>
                    </div>
                    <div className="service-title">
                        <h3>Fullstack Developer</h3>
                    </div>
                    <div className="service-card-content">
                    <p>I am trying to be a Fullstack developer and practicing with React, Django and Django Rest Api.</p>
                    </div>
                </div>
                </div>

            </div>

            </div>

        </div>
    )
}

export default About;