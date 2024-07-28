import { PreviewBook } from '../cmp/preview-book.jsx'

export function BookList({ books }) {
  return (
    <section className="book-list">
      {books.map((book) => (
        <article key={book._id}>
          <PreviewBook book={book} />
          <div className="tools-box">
            <button>x</button>
            <button>edit</button>
            <button>details</button>
          </div>
        </article>
      ))}
    </section>
  )
}
