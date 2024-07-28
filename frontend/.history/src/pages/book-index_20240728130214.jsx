import { useState } from 'react'
import { dataService } from '../services/demo.data'

import { PreviewBook } from '../cmp/preview-book.jsx'

export function BookIndex() {
  const [books, setBooks] = useState(dataService.getDataBooks())

  if (!books) return <h2>loading...</h2>
  return (
    <section className="book-index">
      {books.map((book) => {
        ;<article key={book._id}>
          <PreviewBook book={book} />
        </article>
      })}
    </section>
  )
}
