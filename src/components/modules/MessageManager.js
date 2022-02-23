const remoteURL = "http://localhost:8088"

export const getMessagesById = () => {

}

export const getAllMessages = () => {
    return fetch (`${remoteURL}/Messages`)
    .then(res => res.json)

}

export const saveMessage = () => {
    return fetch (`${remoteURL}/Messages`)
    .then(res => res.json)

}