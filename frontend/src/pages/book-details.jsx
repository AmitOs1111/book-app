import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { bookService } from '../services/book.service'
import { AppLoader } from '../pages/app-loader'

export function BookDetails() {
  const dispatch = useDispatch()
  const params = useParams()
  const [book, setBook] = useState(null)
  let isLoading = useSelector((state) => state.bookModule.isLoading)

  useEffect(() => {
    console.log(params.bookId)
    if (params.bookId) loadBook(params.bookId)
  }, [])

  function loadBook(bookId) {
    dispatch({ type: 'SET_LOADING', isLoading: true })
    bookService
      .getById(bookId)
      .then((book) => setBook(book))
      .finally(() => dispatch({ type: 'SET_LOADING', isLoading: false }))
  }

  if (isLoading || !book) return <AppLoader />
  console.log(book)
  return (
    <section className="book-details">
      <img src={book.thumbnail} alt="" />
      <div className="details-content">
        <h2>{book.title}</h2>
        <h3>{book.subtitle}</h3>
        <h4>{`author: ${book.authors[0]}`}</h4>
        <h4>{`published: ${book.publishedDate}`}</h4>
        <p>{book.description}</p>
      </div>
    </section>
  )
}
