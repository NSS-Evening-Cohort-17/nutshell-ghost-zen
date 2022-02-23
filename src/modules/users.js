const remoteURL = "http://localhost:8088"

export const getUsersById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(res => res.json())
  }
  
  export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
  }

  export const addFriend = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(res => res.json())
  }

  export const getAllFriends = (userId) => {
    return fetch(`${remoteURL}/friends?userId=${userId}`)
    .then(res => res.json())
  }

  export const deleteFriend = (Id) => {
    return fetch(`${remoteURL}/friends/${Id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  