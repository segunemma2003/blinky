import Image from "next/image";
import React,{Component} from "react"

import card1 from "../../public/icon/card1.svg";


class EditAutograph3 extends Component{
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
                        <a href="#" className="nav-link">Transcript</a>
                        <a href="#" className="nav-link nt">Templates</a>
                    </div>
                    
                </div>
               <div className="do b-t">
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
        </>
        );
    }
}

export default EditAutograph3;