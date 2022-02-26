// TASKCARD

import React from 'react';
import "./TaskCard.css";
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask }) => {

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

        <Link to={`/tasks/${task.id}/edit`}>
          <button>edit task</button>
        </Link>

        <button type="button" onClick={() => handleDeleteTask(task.id)}>delete task</button>

        {/* <Link to={`/animals/${animal.id}`}>
          <button>Details</button>
        </Link>

        <Link to={`/animals/${animal.id}/edit`}>
          <button>Edit</button> 
         </Link>  */}
      </div>
    </div>
  );
}