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
import cardo1 from "../public/icon/cardo1.svg";
import cardo2 from "../public/icon/cardo2.svg";
import cardo3 from "../public/icon/cardo3.svg";
import cardo4 from "../public/icon/cardo4.svg";
import cardo5 from "../public/icon/cardo5.svg";
class ChooseTemplate extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="jumbot ">
                 <div className="row flex-row-reverse">
                 
                    <div className="col-md-12">
                        <div className="d-flex flex-column gap-2 g-2 first-">
                            <h1 className="h1t">
                            Create beautiful
Audiographs from our library of quality templates
                            </h1>
                            
                        </div>
                    </div>
                    
                 </div>
            </div>
            <div className="table-l">
                <div className="d-flex  myd mb-4">
                    <h5 className="me-auto">Choose templates</h5>
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

                    <div className="row bg-light xbs pt-4 text-center d-flex justify-content-center">
                        <div className="col-12 mb-4">
                            <Image
                                src={cardo1}
                                width="300"
                                height="300"
                                layout="fixed"
                                />
                        </div>
                        <div className="col-12 mb-4">
                            <Image
                                src={cardo2}
                                width="300"
                                height="300"
                                layout="fixed"
                                />
                        </div>
                        <div className="col-12 mb-4">
                            <Image
                                src={cardo3}
                                width="300"
                                height="300"
                                layout="fixed"
                                />
                        </div>
                        <div className="col-12 mb-4">
                            <Image
                                src={cardo4}
                                width="300"
                                height="300"
                                layout="fixed"
                                />
                        </div>
                        <div className="col-12 mb-4">
                            <Image
                                src={cardo5}
                                width="300"
                                height="300"
                                layout="fixed"
                                />
                        </div>
                        
                    </div>
                       
</div>
            </div>
        </>
        );
    }
}

export default ChooseTemplate;