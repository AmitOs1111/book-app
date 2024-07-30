import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookService } from '../services/book.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { BookList } from '../cmp/book-list.jsx'
import { AppLoader } from '../pages/app-loader.jsx'
import { BookEdit } from '../cmp/book-edit.jsx'
import { AppFilter } from '../cmp/app-filter.jsx'
import {
  loadBooks,
  removeBook,
  addBook,
  updateBook,
} from '../store/book.action'

export function BookIndex() {
  const dispatch = useDispatch()
  let { books, isLoading } = useSelector((state) => state.bookModule)
  let filterBy = useSelector((state) => state.bookModule.appFilter)

  const [isPrepareBook, setIsPrepareBook] = useState(false)

  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    console.log('filterBy:', filterBy)
    // eslint - disable - next - line
    // setLoadBooks()
  }, [filterBy])

  useEffect(() => {
    dispatch({ type: 'SET_DARK_SCREEN', isDarkScreen: isPrepareBook })
  }, [isPrepareBook])

  function setLoadBooks() {
    // loadBooks()
    // eslint - disable - next - line
    dispatch({ type: 'SET_LOADING', isLoading: true })
    bookService
      .query(filterBy)
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

  if (isLoading) return <AppLoader />

  return (
    <section className="book-index">
      <div className="header-book-index flex align-center">
        <AppFilter />
        <button onClick={() => togglePrepareBook()}>add new book</button>
      </div>
      <BookList books={books} onRemoveBook={onRemoveBook} />
      {isPrepareBook && <BookEdit togglePrepareBook={togglePrepareBook} />}
    </section>
  )
}
