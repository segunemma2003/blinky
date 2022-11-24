import Image from "next/image";
import React,{Component} from "react"
import image1 from "../../public/podcast-audience/bro.svg";
import podcast from "../../public/icon/podcasr.svg";
import first1 from "../../public/icon/first1.svg";
import first2 from "../../public/icon/first2.svg";
import first3 from "../../public/icon/first3.svg";
import first4 from "../../public/icon/first4.svg";
import plus from "../../public/icon/plus.svg";
import person from "../../public/icon/Vectorperson.svg";
import wave from "../../public/icon/wav.svg";
import microphone from "../../public/icon/microphone.svg";
import graph1 from "../../public/icon/graph1.svg";
import newuser from "../../public/icon/Recent Customer/UIHUT.svg"
import graph2 from "../../public/icon/graph2.svg";
import eng from "../../public/icon/Recent Customer 2/UIHUT.svg";


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="mt-4 px-4 d-flex flex-row gap-2 first-la">
                <div className="d-flex flex-column align-items-center justify-content-center admin-card1 gap-3 pt-4">
                    <div className="plus p-4 d-flex align-items-center justify-content-center ">
                        <Image
                            src={plus}
                            alt="plus"
                            layout="fixed"
                            width="33"
                            height="33"
                            />
                    </div>
                    <p className="plus-text">Add New</p>
                </div>
                <div className="d-flex flex-row align-items-center  p-4 mai-card">
                    <div className=" mida text-nowrap">
                        <p className="high">All Users</p>
                        <p className="mid">350</p>
                        <p className="low">50 new in the last 1 day</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center vectorperson">
                        <Image
                            src={person}
                            width="43"
                            height="43"
                            layout="fixed"
                            alt="person"
                            />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center  p-4 mai-card">
                    <div className=" mida text-nowrap">
                        <p className="high">All Users</p>
                        <p className="mid">350</p>
                        <p className="low">50 new in the last 1 day</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center vectorperson vc1">
                        <Image
                            src={wave}
                            width="43"
                            height="43"
                            layout="fixed"
                            alt="person"
                            />
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center  p-4 mai-card">
                    <div className=" mida text-nowrap">
                        <p className="high">All Users</p>
                        <p className="mid">350</p>
                        <p className="low">50 new in the last 1 day</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center vectorperson vc2">
                        <Image
                            src={microphone}
                            width="43"
                            height="43"
                            layout="fixed"
                            alt="person"
                            />
                    </div>
                </div>
            </div>

            <div className="mt-4 px-4 d-flex flex-row  tgf row">
                <div className="im1">
                    <Image
                        src={graph1}
                        alt="graph"
                        width="734"
                        height="347"
                        layout="responsive"
                        />
                </div>
                <div className="im2">
                <Image
                        src={newuser}
                        alt="graph"
                        width="357"
                        height="347"
                        layout="responsive"
                        />
                </div>
            </div>

            <div className="mt-4 px-4 d-flex flex-row  tgf row">
                <div className="im1">
                    <Image
                        src={graph2}
                        alt="graph"
                        width="734"
                        height="347"
                        layout="responsive"
                        />
                </div>
                <div className="im2">
                <Image
                        src={eng}
                        alt="graph"
                        width="357"
                        height="347"
                        layout="responsive"
                        />
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
                        <a href="#"        className="nav-link nt">All projects</a>
                        <a href="#" className="nav-link">Podcast</a>
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

export default Dashboard;