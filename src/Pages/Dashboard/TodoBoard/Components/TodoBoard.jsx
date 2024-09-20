import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../../../Hooks/useAxios";
import Column from "./Column";
import TodoCard from "./TodoCard";
import { MdFileDownloadDone } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { TbProgressCheck } from "react-icons/tb";
import { VscOpenPreview } from "react-icons/vsc";
import Modal from "../../DNavbar/Tasks/Modal/Modal";
import { SiTask } from "react-icons/si";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import useAuth from "../../../../Hooks/useAuth";
const TodoBoard = () => {
    const queryClient = useQueryClient();
    const axiosPublic = useAxios();
    const {user} = useAuth()

  
    // Get all tasks by user    
  const {data: userAllTask=[], refetch} = useQuery({
    queryKey: ["userAllTask"],
    queryFn: async() => {
      const res = await axiosPublic.get(`/allTask?email=${user?.email}`)
      return res.data
    }
  })

    const filterDataByStatus = (status) => {
        return userAllTask?.filter((todo) => todo.status === status);
    };

    const backLog = filterDataByStatus('backlog');
    const inProgress = filterDataByStatus('inProgress');
    const review = filterDataByStatus('review');
    const completed = filterDataByStatus('completed');

    // Handle drag-and-drop logic
    const handleDragEnd = async (result) => {
        const { destination, source, draggableId } = result;
        console.log('Drag result:', result);
        if (!destination || destination?.droppableId === source?.droppableId) {
            return
        }

        const task = userAllTask?.find(item => item._id === draggableId);

        if (task) {
            // card store before update
            queryClient.setQueryData(["userAllTask"], (oldData) => {
                return oldData?.map(item => 
                    item._id === draggableId 
                    ? { ...item, status: destination.droppableId } 
                    : item
                );
            });
            try {
                await axiosPublic.patch(`/allTask/${task?._id}`, {
                    status: destination.droppableId
                });
                refetch();
            } catch (error) {
                console.error("Failed to update task status:", error);
            }
        }
    };

    return (
            <div className="min-h-screen px-2 md:px-10 py-5 text-black">
                {/* Top and Add Task */}
                <div className="flex justify-between items-center">
                    <p className="uppercase font-bold md:text-lg flex items-center gap-1">
                        <SiTask /> Tasks Board
                    </p>
                    <Modal /> {/* Modal to add a new task */}
                </div>

                {/* Task columns */}
               <DragDropContext onDragEnd={handleDragEnd}>
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10 mx-auto max-w-7xl px-4">
                    {/* Backlog Column */}
                    <Droppable droppableId="backlog">
                        {(provided) => (
                            <Column
                                ref={provided.innerRef}
                                className="border-gray-600 bg-gray-100"
                                title="Backlog"
                                color="gray"
                                icon={LuListTodo}
                                counts={backLog.length}
                                {...provided.droppableProps}
                            >
                                {backLog?.map((item, index) => (
                                    <Draggable key={item?._id} draggableId={item?._id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoCard
                                                    backgroundColor={"#F3F4F6"}
                                                    hoverColor={"#D1D5DB"}
                                                    name={item.name}
                                                    title={item.title}
                                                    shortDescription={item.descriptions?.substring(0, 50) + "..."}
                                                    priority={item.priority}
                                                    status={item.status}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>

                    {/* Repeat the same setup for In Progress, Review, and Completed columns */}
                    <Droppable droppableId="inProgress">
                        {(provided) => (
                            <Column
                                ref={provided.innerRef}
                                className="border-blue-600 bg-blue-100"
                                title="In Progress"
                                icon={TbProgressCheck}
                                counts={inProgress.length}
                                {...provided.droppableProps}
                            >
                                {inProgress?.map((item, index) => (
                                    <Draggable key={item?._id} draggableId={item?._id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoCard
                                                    backgroundColor={"#DBEAFE"}
                                                    hoverColor={"#93C5FD"}
                                                    name={item.name}
                                                    title={item.title}
                                                    shortDescription={item.descriptions?.substring(0, 50) + "..."}
                                                    priority={item.priority}
                                                    status={item.status}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>

                    <Droppable droppableId="review">
                        {(provided) => (
                            <Column
                                ref={provided.innerRef}
                                className="border-purple-600 bg-purple-100"
                                title="Review"
                                icon={VscOpenPreview}
                                counts={review.length}
                                {...provided.droppableProps}
                            >
                                {review?.map((item, index) => (
                                    <Draggable key={item?._id} draggableId={item?._id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoCard
                                                    backgroundColor={"#F3E8FF"}
                                                    hoverColor={"#D8B4FE"}
                                                    name={item.name}
                                                    title={item.title}
                                                    shortDescription={item.descriptions?.substring(0, 50) + "..."}
                                                    priority={item.priority}
                                                    status={item.status}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>

                    <Droppable droppableId="completed">
                        {(provided) => (
                            <Column
                                ref={provided.innerRef}
                                className="border-green-600 bg-green-100"
                                title="Completed"
                                icon={MdFileDownloadDone}
                                counts={completed.length}
                                {...provided.droppableProps}
                            >
                                {completed?.map((item, index) => (
                                    <Draggable key={item?._id} draggableId={item?._id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <TodoCard
                                                    backgroundColor={"#DCFCE7"}
                                                    hoverColor={"#86EFAC"}
                                                    name={item.name}
                                                    title={item.title}
                                                    shortDescription={item.descriptions?.substring(0, 50) + "..."}
                                                    priority={item.priority}
                                                    status={item.status}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>
                </div>
                </DragDropContext>
            </div>
        
    );
}

export default TodoBoard;
