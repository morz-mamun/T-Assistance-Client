

import { Link } from "react-router-dom";



const TaskCard = ({ task, index, handleDeleteTask }) => {
  const { _id, title, descriptions, name, date_from, date_too, priority } = task;
  
  return (
    <div className="rounded-md bg-blue-100 shadow-xl">
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="w-fit">
            {priority === "High" && (
              <p className="bg-red-600 px-3 text-white uppercase rounded-2xl">
                {priority}
              </p>
            )}
            {priority === "Medium" && (
              <p className="bg-orange-600 px-3 text-white uppercase rounded-2xl">
                {priority}
              </p>
            )}
            {priority === "Low" && (
              <p className="bg-blue-600 px-3 text-white uppercase rounded-2xl">
                {priority}
              </p>
            )}
          </div>
          
            <Link to={`/dashboard/edit/${_id}`}>
            <button 
              className="btn btn-circle btn-sm bg-green-600  hover:bg-white"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              {" "}
              Edit
            </button>
            </Link>
            {/* <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-slate-50">
                <h3 className="font-bold text-lg text-center">New Task</h3>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle text-red-600 hover:bg-red-600 hover:text-white absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 pt-5"
                >
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
                      defaultValue="priority"
                      {...register("priority")}
                    >
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
            </dialog> */}
          <button
            onClick={() => handleDeleteTask(_id)}
            className="btn btn-sm  btn-circle hover:bg-red-600 hover:text-white"
          >
            ✕
          </button>
        </div>

        <h2 className="card-title">{title}</h2>
        <p>{descriptions}</p>
        <h1>Name: {name}</h1>
        <p>
          {" "}
          <span className="font-bold">Deadline:</span> {date_from} - {date_too}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
