import Navbar from "./navs";
import SideBar from "./sidebar";
import Sidebar from "./sidebar";



export default function Layout({ children }) {

    return(
        <main>
            <Navbar />
            <div className="">
                <div className="row">
                    <div className="col-2">
                        <SideBar />
                    </div>
                    <div className="col-10">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}