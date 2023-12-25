import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Main = () => {
  return (
    <div data-aos="fade-down"  data-aos-duration="1000" className="">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
