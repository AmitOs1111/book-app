import { useState } from 'react'
import { dataService } from '../services/demo.data'

export function BookIndex() {
  const [books, setBooks] = useState(dataService.getDataBooks())

  return <section className="book-index"></section>
}
