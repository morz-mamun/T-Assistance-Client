import { LuListTodo } from "react-icons/lu";

const Tasks = () => {
    return (
       <div className="px-10 py-5 text-black">
        <p className="uppercase font-bold">Tasks Board</p>
         <div className="grid grid-cols-3 gap-5 my-10">
            <div>
                <div className="border-t-2 border-blue-900 p-2 flex items-center gap-2 text-lg text-blue-">
                   <LuListTodo></LuListTodo> To Do 
                </div>
                <div>

                </div>
            </div>
            <div></div>
            <div></div>
        </div>
       </div>
    );
};

export default Tasks;