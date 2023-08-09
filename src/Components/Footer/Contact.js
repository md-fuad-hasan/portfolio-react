import React from "react";

const Contact = () =>{
    return(
        <div className="my-5">
            <h1 className="my-5 text-center"> Contact with Me</h1>
            <div className="row">
                <div className="col-md-6">
                    <pre className="fs-3 fw-600">
                        Amjader Mor, Kajla<br />
                        Motihar, Rajshahi
                    </pre>
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