import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function UserLayout() {
    return ( 
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
     );
}

export default UserLayout;