import { useEffect, useState } from 'react'
import { dataService } from '../services/demo.data'

import { BookList } from '../cmp/book-list.jsx'
import { bookService } from '../services/book.service'

export function BookIndex() {
  const [books, setBooks] = useState()

  useEffect(() => {
    if (!books) loadBooks()
  }, [])

  function loadBooks() {
    bookService.query().then((books) => console.log(books))
  }

  if (!books) return <h2>loading...</h2>

  return (
    <section className="book-index">
      <BookList books={books} />
    </section>
  )
}
