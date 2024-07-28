import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { bookService } from '../services/book.service'

export function BookDetails() {
  const params = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    console.log('params:', params)
    loadBook(params.bookId)
  }, [])

  function loadBook() {
    bookService.getById(bookId).then((book) => console.log(book))
  }

  return <section className="book-details">BookDetails</section>
}
