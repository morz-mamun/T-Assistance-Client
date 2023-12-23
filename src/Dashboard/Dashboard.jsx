import { FaAddressCard, FaHome, FaList, FaShoppingBag} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#092635] text-center py-5">
        <h1 className="uppercase">
          <span className="text-xl font-bold">DASHBOARD</span>{" "}
        </h1>
        <div className="divider divider-warning"></div>
        <ul className="menu p-4 text-base">
          {
           
          }
          <div className="divider"></div>
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
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
