import * as React from 'react'
import { Link } from 'react-router-dom'
import { PreviewBook } from '../cmp/preview-book.jsx'

import Button from '@mui/material/Button'

export function BookList({ books, onRemoveBook }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <article key={book._id}>
          <PreviewBook book={book} />
          <div className="tools-box flex space-around">
            <Button
              className="btn-remove"
              onClick={() => onRemoveBook(book._id)}
              variant="outlined"
            >
              X
            </Button>

            <Link to={`/book/edit/${book._id}`}>
              <Button variant="outlined"> Edit</Button>
            </Link>
            <Link to={`/book/${book._id}`}>
              <Button variant="contained">Details</Button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
