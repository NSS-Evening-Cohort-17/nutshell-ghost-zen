import React, { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { getAllTasks, getTaskById } from '../../modules/TaskManager';
import { deleteTask } from '../../modules/TaskManager';

export const TaskList = () => {
  // The initial state is an empty array
  const [tasks, setTasks] = useState([]);

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

