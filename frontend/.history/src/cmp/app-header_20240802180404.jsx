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
        <h1>Book Shop</h1>
        <div className="nav-box">
          <NavLink to="/">Home </NavLink> |
          <NavLink to="/about"> About </NavLink> |{' '}
          {user && isConnected && <NavLink to="/book">Books </NavLink>}
          {user && isConnected ? (
            <React.Fragment>
              | {user.fullname}
              <button onClick={() => onLogout()}>Logout</button>
            </React.Fragment>
          ) : (
            <NavLink to="/login">Login </NavLink>
          )}
        </div>
      </div>
    </section>
  )
}
