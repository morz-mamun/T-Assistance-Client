import { FaAddressCard, FaHome, FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import DNavbar from "../Pages/Dashboard/DNavbar/DNavbar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";


const DashBoard = () => {
  const {user, logoutUser} = useAuth()
  const navigate = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleLogout = () => {
    logoutUser()
    .then(() => {
      Toast.fire({
        icon: 'success',
        title: 'User Sign Out successfully'
      })
      navigate('/')
    })
    .catch(() => {
      Toast.fire({
        icon: 'error',
        title: 'User Sign Out failed'
      })
    })
  }
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto">
      <div className="md:w-72 md:min-h-screen bg-[rgb(9,38,53)] md:text-center">
        <div className="border-b-2 border-warning py-5 flex justify-between items-center px-2">
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
          <div className="md:hidden flex items-center gap-1">
          <button onClick={handleLogout} className=" text-warning btn btn-xs btn-outline hover:bg-white hover:text-black">
            <span className="text-xs">SIGN OUT</span>
          </button>
            <div className="">
              <img className="size-10 rounded-full" src={user.photoURL} alt="" />
            </div>
          
          </div>
        </div>

        <ul className="menu md:p-4 text-base border-b-2 border-warning space-y-5">
          <NavLink>
            <div className="flex items-center justify-center gap-2 pl-4 font-bold">
              <MdOutlineDashboard></MdOutlineDashboard> TASK DASHBOARD
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
        <div className="bg-white ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
