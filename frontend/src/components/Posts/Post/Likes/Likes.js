import React, { useState } from 'react'

const Likes = ({ likes, id }) => {
  const [localLikes, setLocalLikes] = useState(likes)

  const token = window.localStorage.accessToken

  const likeClickHandler = () => {
    fetch(`http://localhost:8080/messages/${id}/like`, {
      method: 'post',
      headers: {
        Authorization: token
      }
    })
    setLocalLikes(localLikes + 1)
  }

  return (
    <section className="like-section">
      <button type="button" onClick={likeClickHandler} className="like">
        💖
      </button>
      <p>x{localLikes}</p>
    </section>
  )
}

export default Likes