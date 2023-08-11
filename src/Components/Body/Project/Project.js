import React from "react";
import Agency from '../../../Assets/Projects/agency.png';
import Blog from '../../../Assets/Projects/blog.png';
import Portfolio from '../../../Assets/Projects/Portfolio.png';
import './Project.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = () =>{
    return(
        <div className="my-5" id="project">
            <div>
                <h1 className="text-center mb-5 fs-10">Projects </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <div className="card project-card shadow border-0 bg-white rounded" style={{width: "25rem" ,height: "35rem"}} >
                        <img src={Agency} className="card-img-top img-thumbnail"/>
                        <div className="card-body">
                            <h3 className="card-title">Agency</h3>
                            <p className="card-test">A HTML template project. This application gives an opportunity to hire a developer.</p>
                            <div className="position-absolute w-100 bottom-0 mb-2">
                                <div className=" d-flex justify-content-around">
                                    <div>
                                        <a href="https://hire-agency.netlify.app/" target="_blank" ><button className="btn btn-primary">Live</button></a>     
                                    </div>
                                    <div>
                                    <a href="https://github.com/md-fuad-hasan/agency" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-github"/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <div className="card project-card shadow border-0 bg-white rounded" style={{width: "25rem" ,height: "35rem"}} >
                        <img src={Blog} className="card-img-top img-thumbnail"/>
                        <div className="card-body">
                            <h3 className="card-title">Blog Application</h3>
                            <p className="card-test">A blog web application that provide some features such as view, create, update, delete posts </p>
                            <div className="position-absolute w-100 bottom-0 mb-2">
                                <div className=" d-flex justify-content-around">
                                    <div>
                                        <a href="https://createablog.netlify.app/" target="_blank" ><button className="btn btn-primary">Live</button></a>     
                                    </div>
                                    <div>
                                    <a href="https://github.com/md-fuad-hasan/blog-frontend" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-github"/> </a>
                                    <a href="https://github.com/md-fuad-hasan/blog-backend" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-github"/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                    <div className="card project-card shadow border-0 bg-white rounded" style={{width: "25rem" ,height: "35rem"}} >
                        <img src={Portfolio} className="card-img-top img-thumbnail"/>
                        <div className="card-body">
                            <h3 className="card-title">My Portfolio</h3>
                            <p className="card-test">My Portfolio website that represent myself and my work in details.</p>
                            <div className="position-absolute w-100 bottom-0 mb-2">
                                <div className=" d-flex justify-content-around ">
                                    <div>
                                        <a href="#" target="_blank" ><button className="btn btn-primary">Live</button></a>     
                                    </div>
                                    <div>
                                    <a href="https://github.com/md-fuad-hasan/portfolio-react" target="_blank"><FontAwesomeIcon icon={faGithub} className="project-github"/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Project;