import { SiTask } from "react-icons/si";
import useAllTask from "../../../Hooks/useAllTask";
import AllTaskCart from "./AllTaskCart";

const AllTask = () => {
  const [allTask, refetch] = useAllTask();

  return (
    <div className=" p-10 text-black h-[calc(100vh-66px)]">
      <div className="flex justify-between items-center">
        <p className="uppercase font-bold md:text-lg flex items-center gap-1">
          <SiTask></SiTask> All Tasks
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {allTask?.map((task) => (
          <AllTaskCart key={task._id} task={task}></AllTaskCart>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
