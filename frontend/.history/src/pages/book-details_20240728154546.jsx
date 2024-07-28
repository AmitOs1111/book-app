import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function BookDetails() {
  const params = useParams()

  useEffect(() => {
    console.log('params:', params)
  }, [])
  return <section className="book-details">BookDetails</section>
}
