import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BookList } from '../cmp/book-list.jsx'
import { bookService } from '../services/book.service'

export function BookIndex() {
  const dispatch = useDispatch()
  let books = useSelector((state) => state.bookModule.books)

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

  if (!books) return <h2>loading...</h2>

  return (
    <section className="book-index">
      <BookList books={books} />
    </section>
  )
}
