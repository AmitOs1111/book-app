import { useState } from 'react'
import { dataService } from '../services/demo.data'

export function BookIndex() {
  const [books, setBooks] = useState(dataService.getDataBooks())

  if (!books) return <h2>loading...</h2>
  return <section className="book-index">{books.map((book) => {})}</section>
}
