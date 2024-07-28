export function PreviewBook({ book }) {
  return (
    <section className="preview-book">
      <h2>{book.title}</h2>
      <h4>{book.subtitle}</h4>
      <h6>{book.authors[0]}</h6>
      <h8>
        <span>{book.listPrice.currencyCode}</span>
        {book.listPrice.amount}
      </h8>
    </section>
  )
}
