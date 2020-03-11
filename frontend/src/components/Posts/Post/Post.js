import React from 'react'
import Likes from './Likes/Likes'

const Post = ({ message, likes, id }) => {
  return (
    <article className="card">
      <h3>{message}</h3>
      <section className="card-bottom">
        <Likes likes={likes} id={id} />
      </section>
    </article>
  )
}

export default Post