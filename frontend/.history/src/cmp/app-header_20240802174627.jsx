import { Logout } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { logout } from '../store/user.action'
import { useSelector } from 'react-redux'

export function AppHeader() {
  let { user, isConnected } = useSelector((state) => state.userModule)

  return (
    <section className="app-header full main-layout ">
      <div className="content-header flex align-center space-between">
        <h1>Book Shop</h1>
        <div className="nav-box">
          <NavLink to="/">Home </NavLink> |
          <NavLink to="/about"> About </NavLink> |{' '}
          <NavLink to="/book">Books </NavLink> |{' '}
          {user && isConnected ? (
            <React.Fragment>
              `Hi , ${user.fullname}`
              <button onClick={() => logout()}>Logout</button>
            </React.Fragment>
          ) : (
            <NavLink to="/login">Login </NavLink>
          )}
        </div>
      </div>
    </section>
  )
}
