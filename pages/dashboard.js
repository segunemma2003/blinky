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
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="jumbot">
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
                        <button className="d-none d-lg-block delete-">Delete</button>
                    </div>
                </div>
                <div className="d-none d-lg-flex d-flex flex-column ">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="#"        className="nav-link nt">All projects</a>
                        <a href="#" className="nav-link">Podcast</a>
                        <a href="#" className="nav-link">Autographs</a>
                    </div>
                    
                </div>
                <table className="table table-responsive align-middle tbb">
                        <thead className="thes">
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th style={{ width:"320px" }}>Title</th>
                                <th>Length</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th style={{ width:"109px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3,4,5,6].map((item, index) => (
                                <tr>
                                    <td className="d-none d-lg-flex"><input type="checkbox" className=" rounded-circle" /></td>
                                    <td>
                                    <div className="d-flex flex-row gap-2 tbys">
                                        <Image
                                            src={podcast}
                                            alt="podcast"
                                            width="10px"
                                            height="10px"
                                            layout="fixed"
                                            className="tx"
                                            />
                                            Podcast Episod 1
                                            </div>
                                    </td>
                                    <td className="sa">02:34</td>
                                    <td>
                                        <button className="btn-">Published</button>
                                    </td>
                                    <td className="dte  d-none d-lg-block ">01/06/2022</td>
                                    <td >
                                    <div className="d-flex flex-row gap-3 ">
                                    <Image
                                            src={first1}
                                            alt="podcast"
                                            width="1px"
                                            height="1px"
                                            layout="fixed"
                                            className=" d-none d-lg-block"
                                            />
                                            <Image
                                            src={first2}
                                            alt="podcast"
                                            width="1px"
                                            height="1px"
                                            layout="fixed"
                                            className=" d-none d-lg-block"
                                            />
                                            <Image
                                            src={first3}
                                            alt="podcast"
                                            width="1px"
                                            height="1px"
                                            layout="fixed"
                                            className=" d-none d-lg-block"
                                            />
                                            <Image
                                            src={first4}
                                            alt="podcast"
                                            width="1px"
                                            height="1px"
                                            layout="fixed"
                                            />
                                            </div>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                </table>
               
                <div className="d-lg-none do p-2">
                    <div className="w-100 d-flex flex-row justify-content-space-between">
                        <h5 className="me-auto">Autographs</h5>
                        <a className="nav-link">see all</a>
                    </div>
                    <div className="row">
                        {
                            [1,2,3,4,2,4,1,3].map((item, index)=>(
                            <div className="col-6 mb-4 tkyi">
                                <div className="card ty pb-2">
                                    <div className="card-body">
                                        <Image
                                        src={card1}
                                        alt="s"
                                        width="100"
                                        height="100"
                                        layout="fixed"
                                        />
                                    </div>
                                    <div className="txt text-nowrap">
                                    <p>Audiograph EP 1</p>
                                    <small>01/06/2022</small>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
               </div>
               <div className="d-lg-none myd p-2">
                    <div className="w-100 d-flex flex-row justify-content-space-between">
                        <h5 className="me-auto">Explore Audiograph templates</h5>
                    </div>
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

export default Dashboard;