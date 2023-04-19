import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import List from "./LIst";
import { ADD_TODO_LIST } from "../sagas/action";
export default function Add() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleAdd = () => {
    dispatch({type:ADD_TODO_LIST ,payload:{ id: nanoid(), todo: task, completed: false }})
  };

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Add Something to your todo list</h4>
                  <div className="add-items d-flex">
                    <input
                      type="text"
                      className="form-control todo-list-input"
                      placeholder="What do you need to do today?"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                      className="btn btn-success"
                      disabled={task ? false : true}
                      onClick={handleAdd}
                    >
                      Add
                    </button>
                  </div>
                <List />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
