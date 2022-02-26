import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getTaskById, editTask, getAllTasks} from "./../modules/TaskManager"
import "./TaskForm.css"

export const TaskEditForm = () => {
  const [task, setTask] = useState({ ticket: "", detail: "" , dueDate: "", status: "", priority: ""});
  const [isLoading, setIsLoading] = useState(false);

  const {taskId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...task };
    stateToChange[evt.target.id] = evt.target.value;
    setTask(stateToChange);
  };

  const updateExistingTask = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedTask = {
      id: taskId,
      ticket: task.ticket,
      detail: task.detail,
      dueDate: task.dueDate,
      status: task.status,
      priority: task.priority
    };

  editTask(editedTask)
    .then(() => navigate("/tasks")
    )
  }

  useEffect(() => {
    getAllTasks()
        .then(setTask)
}, []);

  useEffect(() => {
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ticket"
              value={task.ticket}
            />
            <label htmlFor="name">Task Title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="detail"
              value={task.detail}
            />
            <label htmlFor="detail">Task Details</label>
          </div>

          <fieldset>
				<div className="dueDate">
                    <label htmlFor="dueDate"> Due Date: </label>
                    <div className="space"></div>
				<input type="date" name="dueDate" id="dueDate" value={task.dueDate} onChange={handleFieldChange}>
					</input>
				</div>
                <div className="space"></div>
    		</fieldset>

            <fieldset>
			    <div className="form-group">
					<label htmlFor="status">Status of Task: </label>
					<select value={task.status} name="status" id="status" onChange={handleFieldChange} className="form-control" >
						<option value="0">status options</option>
							<option value="complete">complete</option>
                            <option value="incomplete">incomplete</option>
                            <option value="currently working on">currently working on</option>
					</select>
				</div>
			</fieldset>

            <fieldset>
			    <div className="form-group">
					<label htmlFor="priority">Priority Level: </label>
					<select value={task.priority} name="priority" id="priority" onChange={handleFieldChange} className="form-control" >
						<option value="0">priority options</option>
							<option value="high priority">high priority</option>
                            <option value="low priority">low priority</option>
                            <option value="no priority, get done whenever">no priority, get done whenever</option>
					</select>
				</div>
			</fieldset>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingTask}
              className="btn btn-primary"
            >Update Task</button>

          </div>
        </fieldset>
      </form>
    </>
  );
}