import Image from "next/image";
import React,{Component} from "react"

class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <div className="auth">
           
            <div className="auth-container shadow-sm p-3 mb-5 bg-white rounded row">
                <div className="d-none d-lg-block col-6 auth-t">
                    <h1>Blinky</h1>
                    <div className="auth-text">
                        Convert your twitter threads or spaces into a podcast.
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-4 ">
                    <form className="auth-form">
                        <div className="form-group">
                            <h5>Reset password</h5>
                            <h4>Enter your email to reset your <br />password</h4>
                        </div>
                        <br /> 
                        <div className="d-flex flex-column gap-3">
                            <div className="form-group">
                                <div className="d-flex flex-column gap-2">
                                    <label className="control-label">Email</label>
                                    <input className="form-control" placeholder="Please enter your email"/>
                                </div>
                            </div>
                          
                            <div className="form-group">
                                <button className="form-control bn-auth py-3 rounded-pill">Submit</button>
                            </div>
                            <div className=" form-group d-flex flex-row gap-2 justify-content-center align-items-center">
                                <p className="neuser control-label">New User? </p>
                                <a href="#" className="ppppuser">Register</a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            

        </div>
        );
    }
}

export default ResetPassword;