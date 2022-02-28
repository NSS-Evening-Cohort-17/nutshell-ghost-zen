// TASKCARD

import React from 'react';
import './../Nutshell.css'
import "./TaskCard.css"
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask }) => {
  const navigate = useNavigate()

  return (
    <div className="tasks__card">
      <div className="task__card">
        <h4><span className="tasks__title">
          {task.ticket}
        </span></h4>
        <p>Due on: {task.dueDate}</p>
        <p>Details: {task.detail}</p>
        <p>Status: {task.status}</p>
        <p>Priority Status: {task.priority}</p>


        <div className="crud__btns">
            <button className="crud__btn btn" type="button" onClick={() => handleDeleteTask(task.id)} id="delete__btn">delete</button>

            <button className="crud__btn btn" id="edit__btn" onClick={() => {navigate(`/tasks/${task.id}/edit`)}}>edit</button>
        </div>

        <hr></hr>


      </div>

    </div>
  
  );
}