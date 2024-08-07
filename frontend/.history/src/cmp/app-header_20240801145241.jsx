import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header full main-layout ">
      <div className="content-header flex align-center space-between">
        <h1>Book Shop</h1>
        <div className="nav-box">
          <NavLink to="/">Home </NavLink> |
          <NavLink to="/about"> About </NavLink> |{' '}
          <NavLink to="/book">Books </NavLink>
          <NavLink to="/login">Login </NavLink>
        </div>
      </div>
    </section>
  )
}
