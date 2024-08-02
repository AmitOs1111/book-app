import * as React from 'react'
import { Link } from 'react-router-dom'
import { PreviewBook } from '../cmp/preview-book.jsx'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export function BookList({ books, onRemoveBook }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <article key={book._id}>
          <PreviewBook book={book} />
          <div className="tools-box">
            <Button onClick={() => onRemoveBook(book._id)} variant="outlined">
              X
            </Button>

            <Link to={`/book/edit/${book._id}`}>
              <Button variant="outlined"> edit</Button>
            </Link>
            <Link className="btn-tools-box" to={`/book/${book._id}`}>
              details
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
