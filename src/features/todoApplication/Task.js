import React from "react";
import { useDispatch ,useSelector } from "react-redux";
// import { deleteTask } from "../../actions/todo";
import { deleteTask } from "./todoSlice";

import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

//   const handleCheckbox = () => {
//     dispatch(editTask({ ...task, completed: !task.completed }));
//   };
  return (
    <li className="list-item">
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            // checked={task.completed}
            // onChange={handleCheckbox}
          />
          {task.todo}
          
          <i class="input-helper"></i>
        </label>
      </div>
      <div className="action-btn">
       <button
        type="button" className="btn btn-danger"
        onClick={() => handleDelete(task.id)}
      > Delete</button>
        
      <Link to={`/edit/${task.id}`}>
        <button
        className="btn btn-primary"
      > edit todo</button>
      </Link>
      </div>
    </li>
);
};

export default Task;
