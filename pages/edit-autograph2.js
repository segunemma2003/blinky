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

class EditAutograph2 extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="table-l tkkp">
                <div className="d-flex  myd mt-2">
                    <h5 className="me-auto">Edit Autograph</h5>
                    <div className="d-flex">
                        <button className=" d-none d-lg-block  delete-">Cancel</button>
                    </div>
                </div>
                <div className="d-flex flex-column d-none d-lg-flex mt-4 ">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="/edit-autograph"        className="nav-link">Styles</a>
                        <a href="/edit-autograph2" className="nav-link nt">Transcript</a>
                        <a href="/edit-autograph3" className="nav-link">Templates</a>
                    </div>
                    
                </div>
               <div className="do b-t mt-4">
                <div className="row flex-row-reverse ">
                <div className="col-lg-6 col-md-12 col-sm-12 b-t-p gap-3">
                  
                  <Image
                      src={card1}
                      layout="responsive"
                      width="447.58"
                      height="447.58"
                  />
                    <br /><br />
                  <div class="d-flex flex-row gap-2 text-center align-items-center justify-content-center">
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
                          width="200"
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
                  <div className="d-none gap-2 d-lg-flex align-items-center justify-content-center mt-4">
                      <button className="btt">Save Changes</button>
                      <button className="btz">Download</button>
                      <button className="btz"> Share</button>
                  </div>
              </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-2 ">
                    <div className="d-flex flex-column d-lg-none mt-4 mb-3  px-4">
                            <div className="d-flex flex-row  gap-4">
                                <a href="#"        className="nav-link nt">Styles</a>
                                <a href="#" className="nav-link">Transcript</a>
                                <a href="#" className="nav-link ">Templates</a>
                            </div>
                            
                        </div>
                       <h6 className="px">Edit transcipt</h6>
                       <div className="kdr p-4">
                        Lorem Ipsum has been the industry's standard dummy text <br/>
                        ever since the 1500s, when an unknown printer took a galle<br />
                         of type and scrambled it to make a type
                       </div>
                    </div>
                 
                </div>
                  
               </div>
            </div>
        </>
        );
    }
}

export default EditAutograph2;