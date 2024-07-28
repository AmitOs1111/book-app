import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { AppLoader } from '../pages/app-loader'
import { bookService } from '../services/book.service'
import { dataService } from '../services/demo.data'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { utilService } from '../services/util.service'

export function BookEdit({ togglePrepareBook }) {
  const dispatch = useDispatch()
  const [book, setBook] = useState()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({ type: 'SET_DARK_SCREEN', isDarkScreen: true })
    console.log('params', params)
    if (params.bookId) {
      bookService.getById(params.bookId).then((book) => setBook(book))
    } else {
      const randomIdx = utilService.getRandomIntInclusive(0, 5)
      let randomBook = dataService.getDataBooks()[randomIdx]
      randomBook._id = null
      setBook(randomBook)
    }

    return () => {
      console.log('Done!')
    }
  }, [])

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value

    setBook((prevBook) => ({ ...prevBook, [field]: value }))
  }

  function onAddBook() {
    bookService
      .save(book)
      .then((book) => {
        dispatch({ type: 'ADD_BOOK', book })
        togglePrepareBook()
        showSuccessMsg('New Book!')
      })
      .catch((err) => showErrorMsg('cannot add book'))
  }

  function onCloseBookEdit() {
    if (params.bookId) {
      dispatch({ type: 'SET_DARK_SCREEN', isDarkScreen: false })
      navigate('/book')
    } else togglePrepareBook()
  }

  if (!book) return <AppLoader />

  return (
    <section className="book-edit">
      <div className="header-book-edit flex space-between">
        <h2>prepare a new Book</h2>
        <button onClick={() => onCloseBookEdit()}>x</button>
      </div>

      <form className="flex column space-between">
        <input
          onChange={handelChange}
          value={book.title}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          onChange={handelChange}
          value={book.subtitle}
          type="text"
          name="subtitle"
          placeholder="subtitle"
        />
        <input
          onChange={handelChange}
          value={book.authors[0]}
          type="text"
          name="authors"
          placeholder="authors"
        />
        <input
          onChange={handelChange}
          value={book.publishedDate}
          type="number"
          name="publishedDate"
          placeholder="publishedDate"
        />
        <textarea
          onChange={handelChange}
          value={book.description}
          name="description"
          cols="30"
          rows="5"
        ></textarea>
        <input
          onChange={handelChange}
          value={book.pageCount}
          type="number"
          name="pageCount"
          placeholder="pageCount"
        />
        <select name="categories" id="">
          <option value="Computers">Computers</option>
          <option value="Hack">Hack</option>
        </select>
        <input
          onChange={handelChange}
          value={book.thumbnail}
          type="text"
          name="thumbnail"
          placeholder="thumbnail"
        />
        <select name="language">
          <option value="En">En</option>
          <option value="Sp">Sp</option>
          <option value="He">HE</option>
        </select>
        <input
          onChange={handelChange}
          value={book.listPrice.amount}
          type="number"
          name="amount"
          placeholder="amount"
        />
      </form>
      <button onClick={() => onAddBook()}>Submit</button>
    </section>
  )
}
