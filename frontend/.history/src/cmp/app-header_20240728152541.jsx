import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header main-layout flex align-center space-between">
      <h1>Book Shop</h1>
      <div className="nav-box">
        <NavLink to="/">Home </NavLink> |<NavLink to="/about"> About </NavLink>{' '}
        | <NavLink to="/book">Books </NavLink>
      </div>
    </section>
  )
}
