import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const DNavbar = () => {
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
  return (
    <div className="bg-[#092635] border-b-2 border-warning hidden md:block">
      <div className="px-5">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="py-2 flex items-center gap-5 ">
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <h1>{user.displayName}</h1>
            </div>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className="text-warning btn btn-sm btn-outline hover:bg-white hover:text-black"
            >
              SIGN OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DNavbar;
