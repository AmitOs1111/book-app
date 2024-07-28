import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <h1>Book Shop</h1>
      <NavLinknk to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </section>
  )
}
