export function PreviewBook({ book }) {
  return (
    <section className="preview-book">
      <h2>{book.title}</h2>
      <p>{book.subtitle}</p>
      <h6>{book.authors[0]}</h6>
      <h6>
        <span>{book.listPrice.currencyCode}</span>
        {book.listPrice.amount}
      </h6>
    </section>
  )
}
