import { LuListTodo } from "react-icons/lu";
import { SiTask } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { MdFileDownloadDone } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const Tasks = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const title = form.title.value;
    const descriptions = form.descriptions.value;
    const date_from = form.date_from.value;
    const date_too = form.date_too.value;
    const priority = form.priority.value;

    
  };
  return (
    <div className="px-2 md:px-10 py-5 text-black">
      <div className="flex justify-between items-center">
        <p className="uppercase font-bold md:text-lg flex items-center gap-1">
          <SiTask></SiTask> Tasks Board
        </p>

        {/* modal to add new task */}

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
            <form  onSubmit={handleAddTask}  className="space-y-4 pt-5">
                  <div className="space-y-2">
                    <label className="text-base">
                      <span className="">Requester Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Type Here"
                      className="border-2 p-2 input-ghost w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-base">
                      <span className="">Task Title</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Type Here"
                      className="border-2 p-2 input-ghost w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-base">
                      <span className="">Descriptions</span>
                    </label>
                    <input
                      type="text"
                      name="descriptions"
                      placeholder="Type Here"
                      className="border-2 p-2 input-ghost w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-base">
                      <span className="">Deadline</span>
                    </label>
                    <div className="flex flex-col md:flex-row gap-1">
                      <input
                        type="date"
                        name="date_from"
                        placeholder=""
                        className="border-2 p-2 input-ghost w-full"
                      />
                      <p className="flex items-center">Too</p>
                      <input
                        type="date"
                        name="date_too"
                        placeholder=""
                        className="border-2 p-2 input-ghost w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-base">
                      <span className="">Priority</span>
                    </label>
                    <select className="border-2 p-2 w-full" name="priority">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      className="btn btn-outline btn-sm bg-warning hover:bg-white hover:text-black"
                    >
                      Add Task
                    </button>
                  </div>
                </form>
          </div>
        </dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div>
          <div className="border-t-2 border-blue-600 p-2 flex items-center gap-2 text-blue-600 uppercase rounded-lg bg-blue-100 hover:scale-105">
            <div className="flex items-center gap-1">
              {" "}
              <LuListTodo></LuListTodo> To Do{" "}
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <div className="border-t-2 border-purple-600 p-2 flex items-center gap-2 uppercase text-purple-600 rounded-lg bg-purple-100 hover:scale-105">
            <FcProcess></FcProcess> In Process
          </div>
          <div></div>
        </div>
        <div>
          <div className="border-t-2 border-green-600 p-2 flex items-center gap-2 text-lg text-green-600 uppercase rounded-lg bg-green-100 hover:scale-105">
            <MdFileDownloadDone></MdFileDownloadDone> Complete
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
