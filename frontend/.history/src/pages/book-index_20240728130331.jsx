import { useState } from 'react'
import { dataService } from '../services/demo.data'

import { PreviewBook } from '../cmp/preview-book.jsx'

export function BookIndex() {
  const [books, setBooks] = useState(dataService.getDataBooks())

  if (!books) return <h2>loading...</h2>
  return (
    <section className="book-index">
      {books.map((book) => {
        ;<React.Fragment>
          <article key={book._id}>
            <PreviewBook book={book} />
          </article>
          <div className="tools-box">
            <button>x</button>
            <button>edit</button>
          </div>
        </React.Fragment>
      })}
    </section>
  )
}
