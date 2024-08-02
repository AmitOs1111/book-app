import { Link } from 'react-router-dom'
import { PreviewBook } from '../cmp/preview-book.jsx'

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
            {/* <button
              onClick={() => onRemoveBook(book._id)}
              className="btn-tools-box"
            >
              x
            </button> */}

            <Link className="btn-tools-box" to={`/book/edit/${book._id}`}>
              edit
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
