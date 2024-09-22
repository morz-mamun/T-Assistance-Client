import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const TaskCard = ({ task, handleDeleteTask }) => {
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
          
            <div className="space-x-2">
            <Link to={`/dashboard/edit/${_id}`}>
            <button 
              className="btn btn-circle btn-sm bg-green-600  hover:bg-white"
            >
              
              Edit
            </button>
            </Link>
          <button
            onClick={() => handleDeleteTask(_id)}
            className="btn btn-sm  btn-circle hover:bg-red-600 hover:text-white"
          >
            ✕
          </button>
            </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <h1 className="font-semibold">Name: {name}</h1>
        <p>{descriptions}</p>
        <p>
          {" "}
          <span className="font-bold">Deadline:</span> {date_from} - {date_too}
        </p>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  handleDeleteTask: PropTypes.func,

};

export default TaskCard;
