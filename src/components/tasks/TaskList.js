// TASKLIST

import React, { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { getAllTasks, deleteTask } from '../modules/TaskManager';
import { useNavigate} from "react-router-dom"

export const TaskList = () => {
  // The initial state is an empty array
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const getTasks = () => {
    return getAllTasks().then(tasksFromAPI => {
      setTasks(tasksFromAPI)
    });
  };

  const handleDeleteTask = id => {
    deleteTask(id)
    .then(() => getAllTasks().then(setTasks));
};

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
    <h3 className="page__title">Tasks</h3>

    <section className="section-content">
        <button type="button"
          className="big__btn"
            onClick={() => {navigate("/tasks/create")}}>
            add task
          </button>
        </section>

    <div className="tasks__card">
        {tasks.map(task =>
         <TaskCard
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask} /> )}
    </div>
    </>
  );
};

