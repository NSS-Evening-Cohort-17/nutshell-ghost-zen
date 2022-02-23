


const remoteURL = "http://localhost:8088"

export const getTaskById = (taskId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/tasks/${taskId}?_expand=ticket&_expand=detail`)
  .then(res => res.json())
}

export const getAllTasks = () => {
  return fetch(`${remoteURL}/tasks`)
  .then(res => res.json())
}
