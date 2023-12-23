import { FaAddressCard, FaHome, FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import DNavbar from "../Pages/Dashboard/DNavbar/DNavbar";

const DashBoard = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
      <div className="md:w-72 md:min-h-screen bg-[rgb(9,38,53)] md:text-center">
        <div className="border-b-2 border-warning py-5">
          <Link className="text-warning" to={"/"}>
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hover:text-warning"
            >
              T-ASSISTANCE
            </button>
          </Link>
        </div>

        <ul className="menu md:p-4 text-base border-b-2 border-warning space-y-5">
          <NavLink
          >
            <div className="flex items-center justify-center gap-2 pl-4 font-bold">
              <MdOutlineDashboard></MdOutlineDashboard> DASHBOARD
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-warning text-black rounded-lg uppercase"
                : "uppercase hover:text-warning"
            }
            to={"/dashboard/task"}
          >
            <div className="flex items-center gap-2 py-2 pl-4">
              <FaList></FaList> TASKS
            </div>
          </NavLink>
        </ul>

        {/* bottom */}
        <ul className="menu md:p-4 text-base">
          <li className="uppercase">
            <NavLink to={"/"}>
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="uppercase">
            <NavLink to={"/ourOrder/contact"}>
              <FaAddressCard></FaAddressCard>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <DNavbar></DNavbar>
        <div className="bg-white h-[calc(100vh-66px)] ">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
