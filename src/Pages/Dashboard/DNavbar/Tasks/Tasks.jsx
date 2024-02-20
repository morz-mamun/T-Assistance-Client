import { LuListTodo } from "react-icons/lu";
import { SiTask } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { MdFileDownloadDone } from "react-icons/md";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import TaskCard from "./TaskCard";
import useAuth from "../../../../Hooks/useAuth";
import Modal from "./Modal/Modal";
import { useQuery } from "@tanstack/react-query";


const Tasks = () => {
  const axiosPublic = useAxios();
  const {user} = useAuth()
  
  const {data: userAllTask=[], refetch} = useQuery({
    queryKey: ["userAllTask"],
    queryFn: async() => {
      const res = await axiosPublic.get(`/allTask?email=${user?.email}`)
      return res.data
    }
  })


//   const { register, handleSubmit, reset } = useForm();

//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top",
//     iconColor: "blue",
//     customClass: {
//       popup: "colored-toast",
//     },
//     showConfirmButton: false,
//     timer: 1500,
//     timerProgressBar: true,
//   });

//   const onSubmit = async (data) => {
//     const taskInfo = {
//       name: data.name,
//       email: data.email,
//       title: data.title,
//       descriptions: data.descriptions,
//       date_from: data.date_from,
//       date_too: data.date_too,
//       priority: data.priority,
//     };

//     axiosPublic
//       .post("/allTask", taskInfo)
//       .then((res) => {
//         if (res.data.insertedId) {
//           reset();
//           Toast.fire({
//             icon: "success",
//             title: "Task Added Successfully.",
//           });
//         }
//       })
//       .catch((err) => {
//         Toast.fire({
//           icon: "error",
//           title: err.message,
//         });
//       });
//   };

  const handleDeleteTask = (_id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/allTask/${_id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Task file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  }

  return (
    <div className="px-2 md:px-10 py-5 text-black">
      {/* top and Add task */}
      <div className="flex justify-between items-center">
        <p className="uppercase font-bold md:text-lg flex items-center gap-1">
          <SiTask></SiTask> Tasks Board
        </p>

        {/* modal to add new task */}
        <Modal></Modal>
      </div>

      {/* bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10" >
        {/* to do */}
        <div className="">
          <div className="border-t-2 border-blue-600 p-2 text-blue-600 uppercase rounded-lg bg-blue-100 hover:scale-105">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-1">
                <LuListTodo></LuListTodo> To Do
              </div>
              <div className="w-8 text-center rounded-full bg-blue-600 text-white">
                {userAllTask.length}
              </div>
            </div>
          </div>

          <div className="space-y-5 my-5">
            {userAllTask?.map((task, index) => (
              <TaskCard key={task._id} task={task} index={index} handleDeleteTask={handleDeleteTask}></TaskCard>
            ))}
          </div>
          
        </div>

        {/* On going */}
        <div>
          <div className="border-t-2 border-purple-600 p-2 uppercase text-purple-600 rounded-lg bg-purple-100 hover:scale-105">
            <div className="flex justify-between items-center gap-1">
              <div className="flex items-center gap-1">
                <FcProcess></FcProcess> On Going
              </div>
              <div className="w-8 text-center rounded-full bg-blue-600 text-white">
                {}
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {/* complete */}
        <div>
          <div className="border-t-2 border-green-600 p-2  text-lg text-green-600 uppercase rounded-lg bg-green-100 hover:scale-105">
           <div className="flex justify-between items-center gap-1">
            <div className="flex items-center gap-1">
            <MdFileDownloadDone></MdFileDownloadDone> Complete
            </div>
            <div className="w-8 text-center rounded-full bg-blue-600 text-white">
                {}
              </div>
           </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
