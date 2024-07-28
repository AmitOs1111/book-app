import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Shop</h1>
      </header>
      <main>
        <Routes>
          <Route element={HomePage} path="/" />
          <Route element={AboutUs} path="/about" />
          <Route element={BookIndex} path="/book" />
          <Route element={BookEdit} path="/book/edit" />
          <Route element={BookDetails} path="/book/:bookId" />
          <Route element={UserDetails} path="/user/:userId" />
        </Routes>
      </main>
    </div>
  )
}
