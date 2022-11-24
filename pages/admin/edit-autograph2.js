import Image from "next/image";
import React,{Component} from "react"
import card1 from "../../public/icon/card1.svg";
import play from "../../public/icon/play.svg";
import controls from "../../public/icon/control.svg";
import speaker from "../../public/icon/speaker.svg";

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
                <div className="d-flex  myd">
                    <h5 className="me-auto">Edit Autograph</h5>
                    <div className="d-flex">
                        <button className="  delete-">Cancel</button>
                    </div>
                </div>
                <div className="d-flex flex-column ">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="#"        className="nav-link">Styles</a>
                        <a href="#" className="nav-link nt">Transcript</a>
                        <a href="#" className="nav-link">Templates</a>
                    </div>
                    
                </div>
               <div className="do b-t">
                <div className="row ">
                    <div className="col-6 ">
                       <h6>Edit transcipt</h6>
                       <div className="kdr p-4">
                        Lorem Ipsum has been the industry's standard dummy text <br/>
                        ever since the 1500s, when an unknown printer took a galle<br />
                         of type and scrambled it to make a type
                       </div>
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

export default EditAutograph2;