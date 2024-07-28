import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BookList } from '../cmp/book-list.jsx'
import { bookService } from '../services/book.service'

export function BookIndex() {
  const dispatch = useDispatch()
  let books = bookModule.useSelector()
  useEffect(() => {
    if (!books) loadBooks()
  }, [])

  function loadBooks() {
    bookService.query().then((books) => dispatch({ type: 'SET_BOOKS', books }))
  }

  if (!books) return <h2>loading...</h2>

  return (
    <section className="book-index">
      <BookList books={books} />
    </section>
  )
}
