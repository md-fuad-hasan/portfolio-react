import React from "react";
import './Contact.css';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () =>{
    return(
        <div className="my-5 container p-5" id="contact">
            <h1 className="mb-5 text-center"> Contact with Me</h1>
            <div className="row">
                <div className="col-md-6 d-flex flex-column gap-3 ">
                    <div>
                        <pre className="fs-3 fw-600">
                            Amjader Mor, Kajla<br />
                            Motihar, Rajshahi
                        </pre>
                    </div>
                    
                    <div className="mb-5 text-center text-md-start">
                        <a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook}  className="fs-1 m-3 ms-0"/></a>    
                        <a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram}  className="fs-1 m-3"/></a>    
                        <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}  className="fs-1 m-3"/></a> 
                        <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub}  className="fs-1 m-3"/></a>    

                    </div>
                </div>
                <div className="col-md-6">
                    <form>
                        <input type="text" name="name" className="form-control" placeholder="Your name" /><br />
                        <input type="email" name="email" className="form-control" placeholder="Email"/><br />
                        <textarea  name="message" className="form-control" placeholder="Message"/><br />
                        <button className="btn btn-success w-100" >Send</button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Contact;