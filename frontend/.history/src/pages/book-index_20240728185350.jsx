import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookService } from '../services/book.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { BookList } from '../cmp/book-list.jsx'
import { AppLoader } from '../pages/app-loader.jsx'

export function BookIndex() {
  const dispatch = useDispatch()
  let books = useSelector((state) => state.bookModule.books)
  let isLoading = useSelector((state) => state.bookModule.isLoading)

  useEffect(() => {
    loadBooks()
  }, [])

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

  if (isLoading) return <AppLoader />
  return (
    <section className="book-index">
      <BookList books={books} onRemoveBook={onRemoveBook} />
    </section>
  )
}
