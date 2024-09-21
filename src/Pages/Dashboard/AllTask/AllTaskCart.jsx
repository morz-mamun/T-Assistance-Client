
import propTypes from "prop-types";

const AllTaskCart = ({task}) => {
    const { title, descriptions, name, date_from, date_too, priority } = task;
    return (
        <div className="rounded-md bg-blue-100 shadow-xl">
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div className="w-fit">
              {priority === "High" && (
                <p className="bg-red-600 px-3 text-white uppercase rounded-2xl text-xs py-1 font-bold">
                  {priority}
                </p>
              )}
              {priority === "Medium" && (
                <p className="bg-orange-600 px-3 text-white uppercase rounded-2xl text-xs py-1 font-bold">
                  {priority}
                </p>
              )}
              {priority === "Low" && (
                <p className="bg-blue-600 px-3 text-white uppercase rounded-2xl text-xs py-1 font-bold">
                  {priority}
                </p>
              )}
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

AllTaskCart.propTypes = {
  task: propTypes.object.isRequired,
};

export default AllTaskCart;