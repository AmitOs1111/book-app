import { useState } from 'react'
import { dataService } from '../services/demo.data'

export function BookIndex() {
  const [books, setBooks] = useStatete(dataService.getDataBooks())

  return <section className="book-index"></section>
}
