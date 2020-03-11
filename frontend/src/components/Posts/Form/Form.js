import React, { useState } from 'react'

const Form = () => {
  const [message, setMessage] = useState('')
  const token = window.localStorage.accessToken

  const submitHandler = () => {
    fetch('http://localhost:8080/messages', {
      method: 'post',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
  }

  return (
    <article className="new-message">
      <form className="new-message-form">
        <h4>Put your message here:</h4>
        <textarea rows="4" minLength="5" maxLength="140" required onChange={(e) => { setMessage(e.target.value) }} />
        <section className="card-bottom">
          <button type="submit" onClick={submitHandler} disabled={message.length < 5}>
            <i className="fa fa-heart" aria-hidden="true" />
            Send
            <i className="fa fa-heart" aria-hidden="true" />
          </button>
          <p className={((message.length < 5 || message.length >= 140) ? 'wrongLength' : 'goodLength')}>{message.length}/140</p>
        </section>
      </form>
    </article>
  )
}

export default Form
