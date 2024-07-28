import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function BookDetails() {
  const params = useParams()

  useEffect(() => {
    console.log('params:', params)
    loadBook(params.bookId)
}, [])

function loadBook(){
bookService.getById(bookId).then((book)=>console.log(book);)
}

  return <section className="book-details">BookDetails</section>
}
