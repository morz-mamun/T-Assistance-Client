import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import useAxios from "../../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { IoMdAdd } from "react-icons/io";


const Modal = () => {
    const {user} = useAuth()
    const axiosPublic = useAxios();
    const { register, handleSubmit, reset } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    iconColor: "blue",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  const onSubmit = async (data) => {
    const taskInfo = {
      name: data.name,
      email: data.email,
      title: data.title,
      descriptions: data.descriptions,
      date_from: data.date_from,
      date_too: data.date_too,
      priority: data.priority,
    };

    axiosPublic
      .post("/allTask", taskInfo)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
          Toast.fire({
            icon: "success",
            title: "Task Added Successfully.",
          });
        }
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
    return (
        <div>
            <button
          className="btn btn-sm bg-warning hover:bg-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          {" "}
          <IoMdAdd></IoMdAdd> New Task
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-slate-50">
            <h3 className="font-bold text-lg text-center">New Task</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle text-red-600 hover:bg-red-600 hover:text-white absolute right-2 top-2">
                ✕
              </button>
            </form>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-5">
              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Requester Name*</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("name")}
                  readOnly
                  placeholder="Type Here"
                  className="border-2 p-2 input-ghost w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Requester Email*</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email")}
                  readOnly
                  placeholder="Type Here"
                  className="border-2 p-2 input-ghost w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Task Title*</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  placeholder="Type Here"
                  className="border-2 p-2 input-ghost w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Descriptions*</span>
                </label>
                <input
                  type="text"
                  {...register("descriptions", { required: true })}
                  placeholder="Type Here"
                  className="border-2 p-2 input-ghost w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Deadline*</span>
                </label>
                <div className="flex flex-col md:flex-row gap-1">
                  <input
                    type="date"
                    {...register("date_from", { required: true })}
                    placeholder=""
                    className="border-2 p-2 input-ghost w-full"
                  />
                  <p className="flex items-center">Too</p>
                  <input
                    type="date"
                    {...register("date_too", { required: true })}
                    placeholder=""
                    className="border-2 p-2 input-ghost w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-base">
                  <span className="">Priority*</span>
                </label>
                <select
                  className="border-2 p-2 w-full"
                  defaultValue="default"
                  {...register("priority", { required: true })}
                >
                  <option disabled value="default">
                    Select Priority
                  </option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>

              <div className="flex items-center justify-center">
                <button className="btn btn-outline btn-sm bg-warning hover:bg-white hover:text-black">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </dialog>
        </div>
    );
};

export default Modal;