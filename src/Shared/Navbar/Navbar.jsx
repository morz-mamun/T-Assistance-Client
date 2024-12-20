import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "User Sign Out successfully",
        });
        navigate("/");
      })
      .catch(() => {
        Toast.fire({
          icon: "error",
          title: "User Sign Out failed",
        });
      });
  };
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-warning text-black rounded-lg px-3 py-2 mr-5 uppercase"
            : "mr-5 uppercase hover:text-warning px-3 py-2"
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-warning text-black rounded-lg px-3 py-2 mr-5 uppercase"
            : "mr-5 uppercase hover:text-warning px-3 py-2"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-warning text-black rounded-lg px-3 py-2 mr-5 uppercase"
            : "mr-5 uppercase hover:text-warning px-3 py-2"
        }
        to={"/dashboard"}
      >
        DASHBOARD
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-warning text-black rounded-lg px-3 py-2 mr-5 uppercase"
            : " mr-5 uppercase hover:text-warning px-3 py-2"
        }
        to={"about"}
      >
        about
      </NavLink> 
    </>
  );
  return (
    <div className="bg-[#092635] ">
      <div className="navbar max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-warning "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="hidden md:block text-xl" to={"/"}>
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hover:text-white text-warning"
            >
              T-ASSISTANCE
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link className="block md:hidden" to={"/"}>
            <button
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="text-warning"
            >
              T-ASSISTANCE
            </button>
          </Link>
          {user ? (
            <div
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hidden md:block"
            >
              <button
                onClick={handleLogout}
                className="text-warning btn btn-sm btn-outline hover:bg-white hover:text-black"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <Link
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="hidden md:block"
              to={"/login"}
            >
              <button className="text-warning btn btn-sm btn-outline hover:bg-white hover:text-black">
                SIGN IN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
