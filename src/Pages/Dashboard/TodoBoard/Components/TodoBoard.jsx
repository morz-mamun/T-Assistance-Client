import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios"
import Column from "./Column";
import TodoCard from "./TodoCard";
import { MdFileDownloadDone } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import {TbProgressCheck} from "react-icons/tb"
import {VscOpenPreview} from "react-icons/vsc"
import Modal from "../../DNavbar/Tasks/Modal/Modal";
import { SiTask } from "react-icons/si";




const TodoBoard = () => {
    const axiosPublic = useAxios();
    // get all admin orders
    const {data: allTasks=[], refetch} = useQuery({
        queryKey: ['allTasks'],
        queryFn: async() => {
            const res = await axiosPublic.get('/allTask')
            return res.data
        }
    })
    const filterDataByStatus = (status) => {
        return allTasks?.filter((todo) => todo.status === status);
    }

    const backLog = filterDataByStatus('backlog');
    const inProgress = filterDataByStatus('in progress');
    const review = filterDataByStatus('review');
    const completed = filterDataByStatus('completed');

  
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10 mx-auto max-w-7xl px-4">
            {/* backlog column */}
            <Column className="border-gray-600 bg-gray-100" title="Backlog" color="gray" icon={LuListTodo} counts={backLog?.length}>
                {backLog?.map((item) => {
                    const { _id, name, title, descriptions,  status } = item
                    const shortDescription = (descriptions?.length > 50 ? descriptions?.substring(0, 50) + "..." : descriptions);

                    return (
                        <TodoCard
                            backgroundColor={"#F3F4F6"}
                            hoverColor={"#D1D5DB"}
                            key={_id}
                            name={name} 
                            title={title}
                            shortDescription={shortDescription}
                            description={descriptions}
                            
                            status={status}
                            // onForwardStatusChange={() => handleForwardStatusChange(_id, 'in progress', refetch)}
                        />
                    )
                })}
            </Column>

            {/* in progress column */}
            <Column className={"border-blue-600 bg-blue-100"} title="In Progress" icon={TbProgressCheck} counts={inProgress?.length}>
                {inProgress?.map((item) => {
                    const { _id, title, descriptions,  status } = item
                    const shortDescriptions = (descriptions?.length > 50 ? descriptions?.substring(0, 50) + "..." : descriptions);
                    return (
                        <TodoCard
                            backgroundColor={"#DBEAFE"}
                            hoverColor={"#93C5FD"}
                            key={_id}
                            name={name}
                            title={title}
                            shortDescriptions={shortDescriptions}
                            descriptions={descriptions}
                            
                            status={status}
                            // onForwardStatusChange={() => handleForwardStatusChange(item._id, 'review', refetch)}
                            // onBackwardStatusChange={() => handleBackwardStatusChange(item._id, 'backlog', refetch)}
                        />
                    )
                })}
            </Column>
            {/* review column */}
            <Column className="border-purple-600 bg-purple-100" title="Review" icon={VscOpenPreview} counts={review?.length}>
                {review?.map((item) => {
                    const { _id, name, title, descriptions,  status } = item
                    const shortDescriptions = (descriptions?.length > 50 ? descriptions?.substring(0, 50) + "..." : descriptions);
                    return (
                        <TodoCard
                            backgroundColor={"#F3E8FF"}
                            hoverColor={"#D8B4FE"}
                            key={_id}
                            name={name}
                            title={title}
                            shortDescriptions={shortDescriptions}
                            description={descriptions}
                            
                            status={status}
                            // onForwardStatusChange={() => handleForwardStatusChange(item._id, 'completed', refetch)}
                            // onBackwardStatusChange={() => handleBackwardStatusChange(item._id, 'in progress', refetch)}
                        />
                    )
                })}
            </Column>
            {/* completed column */}
            <Column className={"border-green-600 bg-green-100"} title="Completed" icon={MdFileDownloadDone} counts={completed?.length}>
                {completed?.map((item) => {
                    const { _id, name, title, description,  status } = item
                    const shortDescription = (description?.length > 50 ? description?.substring(0, 50) + "..." : description);
                    return (
                        <TodoCard
                            backgroundColor={"#DCFCE7"}
                            hoverColor={"#86EFAC"}
                            key={_id}
                            name={name}
                            title={title}
                            shortDescription={shortDescription}
                            description={description}
                            
                            status={status}
                            // onBackwardStatusChange={() => handleBackwardStatusChange(item._id, 'review', refetch)}
                        />
                    )
                })}
            </Column>
        </div>
      </div>
       
    );
}

export default TodoBoard;
