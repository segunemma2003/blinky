
import Image from "next/image";
import avatar from "../public/icon/Mask group.svg";
import iconbar from "../public/icon/iconbar.svg";

function Navbar(props){
    return(
        <nav className="custom-nav">
            <div className="container-fluid d-flex">
                <div className="col-3 d-flex">
                <div className="d-lg-none custom-nv-i ">
                    <Image
                        src={iconbar}
                        width="28"
                        height="15"
                        layout="fixed"
                    />
                </div>
                <a href="#" className="navbar-brand bran">Blinky</a>
                </div>
                <div className="col-6">
                <form className="me-auto d-none d-lg-flex">
                    <input type="text" placeholder="Search..." className="input-search"/>
                </form>    
                </div>
                <div className="col-3">
                <div className="nav-end text-nowrap align-self-center ">
                    <Image                        
                        layout="fixed"
                        width={34}
                        height="34"
                        src={avatar.src}
                        alt="avatar"
                    />
                    <p className="text-nowrap d-none d-lg-flex">Adeyinka prime</p>

                </div>    
                </div>
                
                
                
            </div>

           
        </nav>
    );
}

export default Navbar;