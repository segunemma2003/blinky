import Image from "next/image";
import dashboard from "../public/icon/dashboard.svg";
import addspeaker from "../public/icon/addspeaker.svg"
import navspeaker from "../public/icon/navspeaker.svg";
import navwave from "../public/icon/navplus2.svg";
import lasticon from "../public/icon/lasticonnav.svg";
import usericon from "../public/icon/Side nave header/Group 1000004360.svg";


function AdminSideBar(props){
    return(
        <div className="navst p-1">
            <ul className="nav flex-column gap-2">
                <li className="nav-item item-active">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={dashboard}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                        Dashboard
                    </a>

                </li>
                <li><hr /></li>
                <li className="nav-item text-nowrap">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={usericon}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                        Users
                    </a>

                </li>
                <li className="nav-item text-nowrap">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={addspeaker}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                        Create New Podcast
                    </a>

                </li>
                <li className="nav-item">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={navspeaker}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                        All Podcasts
                    </a>

                </li>
                <li className="nav-item text-nowrap">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={navwave}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                       Create New Audiograph
                    </a>

                </li>
                <li className="nav-item text-nowrap">
                   <a className="nav-link d-flex align-items-center flex-row gap-2 tnav"> 
                   <Image
                        src={lasticon}
                        width={19}
                        height={20}
                        layout="fixed"
                        alt="dassh"
                        />
                        All Audiographs
                    </a>

                </li>
            </ul>
            <div style={{ height:"200px" }}></div>
            <ul className="nav flex-column gap-2 align-bottom tiibottom p-2" >
                <div className="ggg p-2">
                    <p className="tesfirst">Adeyinka Prime</p>
                    <p className="teslast">mrprime@gmail.com</p>
                </div>
                <li className="nav-item">
                   <a className="nav-link d-flex align-items-center  tnav"> 
                
                        Settings
                    </a>

                </li>
                <li className="nav-item">
                   <a className="nav-link d-flex align-items-center tnav"> 
                
                        Help
                    </a>

                </li>
                <li className="nav-item">
                   <a className="nav-link d-flex align-items-center  tnav"> 
                
                        Logout
                    </a>

                </li>
            </ul>
        </div>
    )
}

export default AdminSideBar;