import Image from "next/image";
import React,{Component} from "react"
import podcast from "../../public/icon/podcasr.svg";
import first1 from "../../public/icon/first1.svg";
import first2 from "../../public/icon/first2.svg";
import first3 from "../../public/icon/first3.svg";
import first4 from "../../public/icon/first4.svg";

class NewUser extends Component{
    constructor(props){
        super(props);
        this.state={
           
        };

    }
    render(){
        return (
        <>
            <div className="jumbot">
                <div className="ttu d-flex flex-row ">
                    <h3>Add New User</h3>
                    <button className="justify-content-end float-right bh">Add</button>
                </div>
               
            </div>
            <div className="table-l p-4">
                <div className="d-flex  myd">
                    <h5 className="me-auto">All Users</h5>
                    <div className="d-flex">
                        <button className="  delete-">Delete</button>
                    </div>
                </div>
               
               
                <table className="table table-responsive align-middle tbb">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th style={{ width:"320px" }}>Name</th>
                                <th>Email</th>
                                <th>Ip address</th>
                                <th>Country</th>
                                <th>Date Joined</th>
                                <th style={{ width:"109px" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((item, index) => (
                                <tr>
                                    <td><input type="checkbox" className="rounded-circle" /></td>
                                    <td>
                                        Adeyinka Prime
                                    </td>
                                    <td className="sa">mrprime@gamil.com</td>
                                    <td>
                                       192.12.1.2
                                    </td>
                                    <td>
                                        Canada
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

export default NewUser;