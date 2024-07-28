import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/home-page'
import { AboutUs } from './pages/about-us'

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Book Shop</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUs />} path="/about" />
          {/* <Route element={BookIndex} path="/book" /> */}
          {/* <Route element={BookEdit} path="/book/edit" /> */}
          {/* <Route element={BookDetails} path="/book/:bookId" /> */}
          {/* <Route element={UserDetails} path="/user/:userId" /> */}
        </Routes>
      </main>
      <footer className="app-footer">footer</footer>
    </div>
  )
}
