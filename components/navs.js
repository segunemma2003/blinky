
import Image from "next/image";
import avatar from "../public/icon/Mask group.svg";

function Navbar(props){
    return(
        <nav className="custom-nav">
            <div className="container-fluid d-flex">
                <a href="#" className="navbar-brand bran">Blinky</a>
                <form className="me-auto">
                    <input type="text" placeholder="Search..." className="input-search"/>
                </form>
                <div className="nav-end text-nowrap align-self-center ">
                    <Image                        
                        layout="fixed"
                        width={34}
                        height="34"
                        src={avatar.src}
                        alt="avatar"
                    />
                    <p className="text-nowrap">Adeyinka prime</p>

                </div>
            </div>

           
        </nav>
    );
}

export default Navbar;