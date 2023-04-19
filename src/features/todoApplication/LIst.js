import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Task from "./Task";
const List = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding todo-list-box">
        {
          <div className="list-wrapper">
            <ul className="d-flex flex-column-reverse todo-list">
              {tasks?.map((task, index) => {
                return <Task task={task} key={index} />;
              })}   
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default List;
