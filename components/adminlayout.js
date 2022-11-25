import AdminSideBar from "./adminsidebar";
import Navbar from "./navs";
import SideBar from "./sidebar";



export default function AdminLayout({ children }) {

    return(
        <main>
            <Navbar />
            <div className="">
                <div className="row">
                    <div className="col-2  d-none d-lg-flex">
                        <AdminSideBar />
                    </div>
                    <div className="col-10">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}