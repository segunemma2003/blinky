import Image from "next/image";
import React,{Component} from "react"
import card1 from "../../public/icon/card1.svg";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <div>
            <div className="jumbot">
                <div className="ttu d-flex flex-row justify-content-space-between">
                    <h3>Create new audiograph</h3>
                    <button className="justify-content-end float-right bh">Create</button>
                </div>
               
            </div>
            <div className="table-l">
                <div className="d-flex  myd">
                    <h5 className="me-auto">Audiographs</h5>
                    <div className="d-flex">
                        <button className="  delete-">Delete</button>
                    </div>
                </div>
               
               
                <div className="do">
                    <div className="row">
                        {
                            [1,2,3,4,2,4,1,3].map((item, index)=>(
                            <div className="col-3 mb-4 tkyi">
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
                        <div className="col-4">

                        </div>
                        <div className="col-4">
                            
                        </div>
                        <div className="col-4">
                            
                        </div>
                        <div className="col-4">
                            
                        </div>
                    </div>
               </div>
            </div>
        </div>
        );
    }
}

export default Dashboard;