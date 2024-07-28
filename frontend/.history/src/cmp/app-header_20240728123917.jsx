import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header flex align-center space-between">
      <h1>Book Shop</h1>
      <div className="nav-box">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </section>
  )
}
