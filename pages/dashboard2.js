import Image from "next/image";
import React,{Component} from "react"
import image1 from "../public/podcast-audience/bro.svg";
import podcast from "../public/icon/podcasr.svg";
import first1 from "../public/icon/first1.svg";
import first2 from "../public/icon/first2.svg";
import first3 from "../public/icon/first3.svg";
import first4 from "../public/icon/first4.svg";

class Dashboard2 extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="jumbot">
                 <div className="row">
                    <div className="col-7">
                        <div className="d-flex flex-column gap-2 g-2 first-">
                            <h1 className="h1t">
                                Convert your twitter threads <br/> or spaces into a podcast
                            </h1>
                            <input placeholder="Paste Twitter thread or recorded space’s link...."  className="j-input"/>
                            <small className="sma"><u>Use custom text</u></small>
                            <div className="d-flex flex-row gap-2 align-items-center k">
                                <select>
                                   <option>Select Voice</option> 
                                </select>
                                <select>
                                   <option>Select Language</option> 
                                </select>
                                <button>Generate</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <Image
                            src={image1}
                            alt="s"
                            layout="responsive"
                            width="50"
                            height="50"
                            />
                    </div>
                 </div>
            </div>
            <div className="table-l">
                <div className="d-flex  myd">
                    <h5 className="me-auto">Recent Projects</h5>
                    <div className="d-flex">
                        <button className="  delete-">Delete</button>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row cuu gap-4">
                        <a href="#"        className="nav-link">All projects</a>
                        <a href="#" className="nav-link nt">Podcast</a>
                        <a href="#" className="nav-link">Autographs</a>
                    </div>
                    
                </div>
                <table className="table table-responsive align-middle tbb">
                        <thead>
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
                                    <td><input type="checkbox" className="rounded-circle" /></td>
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
                                    <td className="dte">01/06/2022</td>
                                    <td >
                                    <div className="d-flex flex-row gap-3 ">
                                    <Image
                                            src={first1}
                                            alt="podcast"
                                            width="20"
                                            height="20"
                                            layout="responsive"
                                            />
                                            <Image
                                            src={first2}
                                            alt="podcast"
                                            width="20"
                                            height="20"
                                            layout="responsive"
                                            />
                                            <Image
                                            src={first3}
                                            alt="podcast"
                                            width="20"
                                            height="20"
                                            layout="responsive"
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
            </div>
        </>
        );
    }
}

export default Dashboard2;