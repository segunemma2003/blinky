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
import avatar from "../public/icon/Mask group.svg";

class AccountSettings extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <div>
            
            <div className="table-l p-4 kk">
                <div className="d-flex  myd">
                    <h5 className="me-auto">Account Settings</h5>
                    
                </div>
               
               
                <div className="do ">
                    <div className="row">
                        <div className="col-6 t8">
                            <div className="d-flex justify-content-space-between fic" style={{ width:"500px" }}>
                                <h6 className="pofile">Profile</h6>
                                <button className="btsn">Edit</button>
                            </div>
                            <Image
                                src={avatar}
                                layout="fixed"
                                width="70"
                                height="70"
                                />
                                <div className="d-flex flex-column gap-2 mt-4">
                                    <div className="d-flex  flex-row gap-4">
                                        <label className="control-label">Name:</label>
                                        <input placeholder="Adeyinka Prime" className="form-control" />
                                    </div>
                                    <div className="d-flex  flex-row gap-4">
                                        <label className="control-label">Email:</label>
                                        <input placeholder="Mrprime@gmail.com" type="email" className="form-control" />
                                    </div>
                                    <hr />
                                    <div className="d-flex  flex-row gap-4 fitc">
                                        <label className="control-label">password:</label>
                                        <button className="btsn">Update password</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
               </div>
            </div>
        </div>
        );
    }
}

export default AccountSettings;