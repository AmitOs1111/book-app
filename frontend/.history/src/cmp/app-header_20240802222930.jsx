import * as React from 'react'
import { Logout } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { logout } from '../store/user.action'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function AppHeader() {
  const navigate = useNavigate()
  let { user, isConnected } = useSelector((state) => state.userModule)

  function onLogout() {
    logout().then(() => navigate('/'))
  }
  return (
    <section className="app-header full main-layout ">
      <div className="content-header flex align-center space-between">
        <NavLink className="header-logo" to="/">
          <h1>Book Shop</h1>
        </NavLink>
        <div className="nav-box">
          <NavLink className="header-nav-link" to="/">
            Home
          </NavLink>

          <NavLink className="header-nav-link" to="/about">
            About
          </NavLink>

          {user && isConnected && (
            <NavLink className="header-nav-link" to="/book">
              Books
            </NavLink>
          )}
          {user && isConnected ? (
            <React.Fragment className="flex column">
              {user.fullname}
              <button className="header-nav-link" onClick={() => onLogout()}>
                Logout
              </button>
            </React.Fragment>
          ) : (
            <NavLink className="header-nav-link" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </section>
  )
}
