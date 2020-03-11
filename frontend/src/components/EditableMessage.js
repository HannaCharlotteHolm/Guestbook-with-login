import React, { useState } from 'react'

export const EditableMessage = ({ message, id }) => {
  const token = window.localStorage.accessToken
  const [editMode, setEditMode] = useState(false)
  const [newMessage, setNewMessage] = useState(message)

  const handleDelete = () => {
    fetch(`http://localhost:8080/messages/${id}`, {
      method: 'delete',
      headers: {
        Authorization: token
      }
    }).then(() => {
      window.location.reload()
    })
  }

  const handleUpdate = () => {
    fetch(`http://localhost:8080/messages/${id}`, {
      method: 'put',
      body: JSON.stringify({ message: newMessage }),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <div className="new-message">
      {!editMode && <p>{message}</p>}
      {editMode && <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />}
      {!editMode && <button type="button" onClick={() => setEditMode(true)}>edit</button>}
      {editMode && <button type="button" onClick={handleUpdate} className="update">update</button>}
      <button type="button" onClick={handleDelete} className="delete">delete</button>
    </div>
  )
}
