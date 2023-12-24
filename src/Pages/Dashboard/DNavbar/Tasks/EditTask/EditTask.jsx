import { useForm } from "react-hook-form";

import { useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../../../../../Hooks/useAxios";
import useAuth from "../../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const EditTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxios();
  const {_id, title, descriptions, date_from, date_too, priority } = useLoaderData();
  const navigate = useNavigate()
  

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
    const editInfo = {
      name: data.name,
      email: data.email,
      title: data.title,
      descriptions: data.descriptions,
      date_from: data.date_from,
      date_too: data.date_too,
      priority: data.priority,
    };

    axiosPublic
      .put(`/allTask/${_id}`, editInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          reset();
          Toast.fire({
            icon: "success",
            title: "Task Updated Successfully.",
          });
        }
        navigate('/dashboard/task')
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
  };
  return (
    
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-black modal-box bg-slate-100 ">
      <h3 className="font-bold text-lg text-center">Edit Task</h3>
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
              defaultValue={title}
              {...register("title")}
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
              {...register("descriptions")}
              defaultValue={descriptions}
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
                {...register("date_from")}
                defaultValue={date_from}
                placeholder=""
                className="border-2 p-2 input-ghost w-full"
              />
              <p className="flex items-center">Too</p>
              <input
                type="date"
                {...register("date_too")}
                placeholder=""
                defaultValue={date_too}
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
              defaultValue={priority}
              {...register("priority")}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <button className="btn btn-outline btn-sm bg-warning hover:bg-white hover:text-black">
              Update Task
            </button>
          </div>
        </form>
      </div>
      </div>
  );
};

export default EditTask;
