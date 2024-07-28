import { Link } from 'react-router-dom'
import { PreviewBook } from '../cmp/preview-book.jsx'

export function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <article key={book._id}>
          <PreviewBook book={book} />
          <div className="tools-box">
            <button className="btn-tools-box">x</button>
            <button className="btn-tools-box">edit</button>
            <Link className="btn-tools-box" to={`/book/${book._id}`}>
              details
            </Link>
          </div>
        </article>
      ))}
    </section>
  )
}
