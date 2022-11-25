import Navbar from "./navs";
import SideBar from "./sidebar";
import Sidebar from "./sidebar";



export default function Layout({ children }) {

    return(
        <main>
            <Navbar />
            <div className="">
                <div className="row">
                    <div className="col-lg-2  d-none d-lg-flex ">
                        <SideBar />
                    </div>
                    <div className="col-lg-10 col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}