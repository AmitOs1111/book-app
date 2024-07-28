import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { bookService } from '../services/book.service'

export function BookDetails() {
  const params = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    console.log('params:', params)
    if (params.bookId) loadBook(params.bookId)
  }, [])

  function loadBook(bookId) {
    bookService.getById(bookId).then((book) => console.log(book))
  }

  return (
    <section className="book-details">
      <img src={book.thumbnail} alt="" />
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <h4>{`author: ${book.authors[0]}`}</h4>
      <h4>{`published: ${book.publishedDate}`}</h4>
      <p>{book.description}</p>
    </section>
  )
}
