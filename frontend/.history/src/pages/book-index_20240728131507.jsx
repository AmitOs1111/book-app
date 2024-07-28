import { useState } from 'react'
import { dataService } from '../services/demo.data'

import { BookList } from '../cmp/book-list.jsx'

export function BookIndex() {
  const [books, setBooks] = useState(dataService.getDataBooks())

  console.log('books:', books)
  if (!books) return <h2>loading...</h2>
  return (
    <section className="book-index">
      <BookList books={books} />
    </section>
  )
}
