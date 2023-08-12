import React from "react";
import './Hero.css';
import Fuad from '../../../Assets/fuad.png';
import Resume from '../../../Assets/Resume/Fuad_s_Resume.pdf';

const Hero = () =>{
    return(
        <div className="hero row pb-5 bt-5" id="home">
            <div className="hero-left col-md-7 d-flex flex-column align-items-center justify-content-center">
                <div className=" d-flex flex-column ">
                    <span className="fw-bold fs-1">Hi I'm</span>
                    <span className="fw-bold fs-1">Md. Fuad Hasan</span>
                    <div>
                        <p>I am a problem solver and web developer . I have experience to develop web application which are client side or server side or both. </p>
                        <p>Student of B.Sc (Engg) in Information and Communicatin Engineering</p>
                        <p className="fs-5">University of Rajshahi, Rajshahi</p>
                    </div>
                   
                    <a href={Resume}  className="btn btn-success w-sm-100 w-50 " download="Fuad_s_Resume">Download Resume</a>

                </div>
            </div>
            <div className="hero-right col-md-5 text-center">
                <img  src={Fuad} className="img-fluid" alt="Fuad's profile"/>
            </div>

        </div>
    )
}

export default Hero;