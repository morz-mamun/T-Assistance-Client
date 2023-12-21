import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className='bg-[#9EC8B9] max-w-screen-2xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;