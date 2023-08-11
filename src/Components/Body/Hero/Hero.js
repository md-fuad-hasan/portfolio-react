import React from "react";
import './Hero.css';
import Fuad from '../../../Assets/photo_me-removebg-preview.png';

const Hero = () =>{
    return(
        <div className="hero row pb-5 bt-5" id="home">
            <div className="hero-left col-md-7 d-flex flex-column align-items-center justify-content-center">
                <div className=" d-flex flex-column gap-2">
                    <span className="fw-bold fs-1">Hi I'm</span>
                    <span className="fw-bold fs-1">Md. Fuad Hasan</span>
                    <p>I am a problem solver and web developer. I develop website using react and django.</p>
                </div>
            </div>
            <div className="hero-right col-md-5 text-center">
                <img  src={Fuad} className="img-fluid" alt="Fuad's profile"/>
            </div>

        </div>
    )
}

export default Hero;