import Image from "next/image";
import React,{Component} from "react"
import image1 from "../public/podcast-audience/bro.svg";
import podcast from "../public/icon/podcasr.svg";
import first1 from "../public/icon/first1.svg";
import first2 from "../public/icon/first2.svg";
import first3 from "../public/icon/first3.svg";
import first4 from "../public/icon/first4.svg";
import card1 from "../public/icon/card1.svg";
import card2 from "../public/icon/card2.svg";
import card3 from "../public/icon/card3.svg";
import card4 from "../public/icon/card4.svg";

class Dashboard3 extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="jumbot d-none d-lg-flex">
                 <div className="row flex-row-reverse">
                 <div className="col-lg-5 col-md-12">
                    <div className="ste py-4 px-4">
                    <Image
                            src={image1} 
                            alt="s"
                            layout="fixed"
                            width="300"
                            height="255"
                            />
                    </div>
                        
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="d-flex flex-column gap-2 g-2 first-">
                            <h1 className="h1t">
                                Convert your twitter threads <br className="d-none d-lg-flex"/> or spaces into a podcast
                            </h1>
                            <input placeholder="Paste Twitter thread or recorded space’s link...."  className="j-input"/>
                            <small className="sma"><u>Use custom text</u></small>
                            <div className="d-flex flex-column flex-lg-row gap-2 align-items-center k">
                                <div className="d-flex flex-row gap-2 gap-lg-4 p-sm-4">
                                    <select>
                                        <option>Select Voice</option> 
                                    </select>
                                    <select>
                                        <option>Select Language</option> 
                                    </select>
                                </div>
                                
                                <button>Generate</button>
                            </div>
                        </div>
                    </div>
                    
                 </div>
            </div>
            <div className="table-l">
                <div className="d-flex  myd">
                    <h5 className="me-auto">Recent Projects</h5>
                    <div className="d-flex">
                        <button className=" d-none d-lg-block delete-">Delete</button>
                    </div>
                </div>
                <div className="d-flex d-none d-lg-flex flex-column">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="#"        className="nav-link">All projects</a>
                        <a href="#" className="nav-link">Podcast</a>
                        <a href="#" className="nav-link nt">Autographs</a>
                    </div>
                    
                </div>
               <div className="do">
                    <div className="row pt-4">
                        {
                            [1,2,3,4,2,4,1,3].map((item, index)=>(
                            <div className="col-6 mb-4 tkyi">
                                <div className="card ty pb-2">
                                    <div className="card-body">
                                        <Image
                                        src={card1}
                                        alt="s"
                                        width="200"
                                        height="200"
                                        layout="responsive"
                                        />
                                    </div>
                                    <div className="txt">
                                    <p>Audiograph EP 1</p>
                                    <small>01/06/2022</small>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                       
                    </div>
               </div>
            </div>
        </>
        );
    }
}

export default Dashboard3;