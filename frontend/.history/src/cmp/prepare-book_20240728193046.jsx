export function PrepareBook({ togglePrepareBook }) {
  return (
    <section className="prepare-book">
      <div className="header-prepare-book flex space-between">
        <h2>prepare a new Book</h2>
        <button onClick={() => togglePrepareBook()}>x</button>
      </div>
    </section>
  )
}
