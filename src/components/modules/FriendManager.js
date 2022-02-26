const remoteURL = "http://localhost:8088"

export const getUsersById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(res => res.json())
  }
  
  export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(res => res.json())
  }

  export const getFriendById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(res => res.json())
  }

  export const getAllFriends = (userId) => {
    return fetch(`${remoteURL}/friends?currentUserId=${userId}`)
    .then(res => res.json())
  }
//return fetch(`${remoteURL}/friends?id=${Id}`, {
  // -- return fetch(`${remoteURL}/friends/${Id}`, {
  export const deleteFriend = (Id) => {
    return fetch(`${remoteURL}/friends/${Id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
  
  export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
  }