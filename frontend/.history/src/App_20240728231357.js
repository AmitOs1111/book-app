import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/home-page'
import { AboutUs } from './pages/about-us'
import { AppHeader } from './cmp/app-header'
import { BookIndex } from './pages/book-index.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { UserMsg } from './cmp/user-msg'
import { DarkScreen } from './pages/dark-screen.jsx'
import { BookEdit } from './cmp/book-edit.jsx'

export default function App() {
  return (
    <div className="App main-layout">
      <AppHeader />
      <DarkScreen />
      <main>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<BookIndex />} path="/book" />
          <Route element={<BookEdit />} path="/book/edit/:bookId" />
          <Route element={<BookDetails />} path="/book/:bookId" />
          {/* <Route element={UserDetails} path="/user/:userId" /> */}
        </Routes>
      </main>
      <UserMsg />
      <footer className="app-footer full">footer</footer>
    </div>
  )
}
