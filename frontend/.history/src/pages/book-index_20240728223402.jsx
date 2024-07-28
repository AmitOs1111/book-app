import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookService } from '../services/book.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { BookList } from '../cmp/book-list.jsx'
import { AppLoader } from '../pages/app-loader.jsx'
import { PrepareBook } from '../cmp/prepare-book.jsx'

export function BookIndex() {
  const dispatch = useDispatch()
  let books = useSelector((state) => state.bookModule.books)
  let isLoading = useSelector((state) => state.bookModule.isLoading)

  const [isPrepareBook, setIsPrepareBook] = useState(false)

  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    dispatch({ type: 'SET_DARK_SCREEN', isDarkScreen: isPrepareBook })
  }, [isPrepareBook])

  function loadBooks() {
    dispatch({ type: 'SET_LOADING', isLoading: true })
    bookService
      .query()
      .then((books) => dispatch({ type: 'SET_BOOKS', books }))
      .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false }))
  }

  function onRemoveBook(bookId) {
    bookService
      .remove(bookId)
      .then((bookId) => {
        dispatch({ type: 'REMOVE_BOOK', bookId })
        showSuccessMsg('Succeeded removing a book ')
      })
      .catch((err) => showErrorMsg('cannot removing a bookId', err))
  }

  function togglePrepareBook() {
    setIsPrepareBook((prevIsPrepareBook) => !prevIsPrepareBook)
  }

  function addBook(book) {
    bookService
      .save(book)
      .then((book) => {
        togglePrepareBook()
        dispatch({ type: 'ADD_BOOK', book })
        showSuccessMsg('New Book!')
      })
      .catch((err) => showErrorMsg('cannot add book'))
  }

  if (isLoading) return <AppLoader />
  return (
    <section className="book-index">
      <button onClick={() => togglePrepareBook()}>add new book</button>
      <BookList books={books} onRemoveBook={onRemoveBook} />
      {isPrepareBook && (
        <PrepareBook addBook={addBook} togglePrepareBook={togglePrepareBook} />
      )}
    </section>
  )
}
