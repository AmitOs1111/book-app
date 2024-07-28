import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <section className="app-header flex">
      <h1>Book Shop</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </section>
  )
}
