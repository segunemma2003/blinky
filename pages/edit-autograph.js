import Image from "next/image";
import React,{Component} from "react"
import image1 from "../public/podcast-audience/bro.svg";
import podcast from "../public/icon/podcasr.svg";
import first1 from "../public/icon/first1.svg";
import first2 from "../public/icon/first2.svg";
import first3 from "../public/icon/first3.svg";
import first4 from "../public/icon/first4.svg";
import card1 from "../public/icon/card1.svg";
import play from "../public/icon/play.svg";
import controls from "../public/icon/control.svg";
import speaker from "../public/icon/speaker.svg";

class EditAutograph extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="table-l tkkp">
                <div className="d-flex  myd">
                    <h5 className="me-auto">Edit Autograph</h5>
                    <div className="d-flex">
                        <button className="  delete-">Cancel</button>
                    </div>
                </div>
                <div className="d-flex flex-column ">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="#"        className="nav-link nt">Styles</a>
                        <a href="#" className="nav-link">Transcript</a>
                        <a href="#" className="nav-link ">Templates</a>
                    </div>
                    
                </div>
               <div className="do b-t">
                <div className="row ">
                    <div className="col-6 ">
                        <form class="d-flex flex-column gap-3">
                            <div className="row">
                                <div class="col-8">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Podcast name</label>
                                        <input placeholder="digital corner" className="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Color</label>
                                        <input type="color" className="form-control w-50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-8">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Author</label>
                                        <input placeholder="Adeyinka Prime" className="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Color</label>
                                        <input type="color" className="form-control w-50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-8">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Email</label>
                                        <input placeholder="please enter your emailr" className="form-control" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Color</label>
                                        <input type="color" className="form-control w-50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-8">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Wave Form</label>
                                        <div className="wrapper">
                                            { 
                                                [1,2,3,4,5,6,].map((item,index)=>(
                                                   
                                                        <input placeholder={`wave${index}`} className="form-control" />
                                                   
                                                    
                                                ))
                                            }
                                        </div>
                                      
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Color</label>
                                        <input type="color" width="50px" className="form-control w-50" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-8">
                                    <div className="d-flex flex-column gap-2">
                                        <label className="control-label">Background</label>
                                        <div className="row">
                                            <div className="col-6  gap-2">
                                                <label>Image</label>
                                                <div width="150" height="150" className="cc"></div>
                                            </div>
                                            <div className="col-6 gap-2">
                                                <label>Color</label>
                                                <input type="color" className="form-control w-50" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6  gap-2">
                                                <label>Avatar</label>
                                                <div width="150" height="150" className="cc"></div>
                                            </div>
                                            <div className="col-6 gap-2">
                                                <label>Color</label>
                                                <input type="color" className="form-control w-50" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-6 b-t-p gap-3">
                  
                        <Image
                            src={card1}
                            layout="responsive"
                            width="447.58"
                            height="447.58"
                        />
                          <br /><br />
                        <div class="d-flex flex-row ">
                            <Image
                                src={play}
                                layout="fixed"
                                width="30"
                                height="30"
                                />
                                <div>
                                 <Image
                                src={controls}
                                layout="fixed"
                                width="310"
                                height="7"
                                />
                                </div>
                                <div className="d-flex align-items-center gap-4">
                                    <p className="sse">00:00</p>
                              <div className="sound">
                              <Image
                                src={speaker}
                                layout="fixed"
                                width="25.06"
                                height="18.8"
                                />
                              </div>
                                
                                  </div>
                                
                        </div>
                        <div className="d-flex gap-3 align-items-center justify-content-center mt-4">
                            <button className="btt">Save Changes</button>
                            <button className="btz">Download</button>
                            <button className="btz"> Share</button>
                        </div>
                    </div>
                </div>
                  
               </div>
            </div>
        </>
        );
    }
}

export default EditAutograph;