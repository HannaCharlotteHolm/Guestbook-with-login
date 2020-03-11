/* eslint-disable operator-linebreak */
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from 'reducers/auth'
import { BtnLogOut } from 'components/UI'

export const Header = () => {
  const dispatch = useDispatch()

  // Check if there is not token in localstorage from preview session
  if (window.localStorage.accessToken) {
    dispatch(auth.actions.login())
  }

  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  )

  return (
    <header>
      <nav>
        <span>
          <Link to="/">
            <strong>Messenger</strong>
          </Link>
        </span>
        <span>
          {isAuthenticated && <>
            <Link to="/myMessages">
              <button type="button">My Messages</button>
            </Link>
            <BtnLogOut />
          </>}
          {!isAuthenticated &&
            <>
              <Link to="/login">
                <button type="button">Log In</button>
              </Link>
              <Link to="/signup">
                <button type="button">Sign Up</button>
              </Link>
            </>}
        </span>
      </nav>
    </header>
  )
}