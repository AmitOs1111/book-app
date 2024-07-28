import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header full main-layout ">
      <div className="content-header">
        <h1>Book Shop</h1>
        <div className="nav-box">
          <NavLink to="/">Home </NavLink> |
          <NavLink to="/about"> About </NavLink> |{' '}
          <NavLink to="/book">Books </NavLink>
        </div>
      </div>
    </section>
  )
}
