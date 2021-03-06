import React, { useState, useEffect } from 'react'
import { EditableMessage } from 'components/EditableMessage'

export const Profile = () => {
  const token = window.localStorage.accessToken
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/users/messages', {
      headers: {
        Authorization: token
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages(data)
      })
  }, [])

  return (
    <>
      {messages.length > 0 &&
        <>
          {messages.map((e) => (
            <EditableMessage message={e.message} id={e._id} key={`key-${e._id}`} />
          ))}
        </>}
    </>
  )
}