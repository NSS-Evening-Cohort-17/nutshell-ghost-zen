const remoteURL = "http://localhost:8088"

export const getEventById = (eventId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/events/${eventId}?_expand=userId&_expand=detail`)
  .then(res => res.json())
}

export const getAllEvents = () => {
  return fetch(`${remoteURL}/events`)
  .then(res => res.json())
}

export const deleteEvent = (id) => {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const addEvent = (newEvent) => {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
}

export const editEvent = (editedEvent) => {
  return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
  }).then(response => response.json())
}