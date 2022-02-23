import React, { useState, useEffect } from 'react';
//import the components we will need
import { TaskCard } from './TaskCard';
import { getAllTasks, getTaskById } from '../../modules/TaskManager';

export const TaskList = () => {
  // The initial state is an empty array
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllTasks().then(tasksFromAPI => {
      setTasks(tasksFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getTasks();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <h3 className="page__title">Tasks</h3>
    
    <div className="tasks__card">
        {tasks.map(task =>
            <TaskCard key={task.id} task={task} />
        )}
    </div>
    </>
  );
};

