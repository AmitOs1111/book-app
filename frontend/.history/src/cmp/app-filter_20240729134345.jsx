export function AppFilter() {
  return (
    <section className="app-filter flex">
      <input type="search" name="title" placeholder="Search..." />
      <input
        type="range"
        name="amount"
        placeholder="price"
        min={10}
        max={200}
      />
    </section>
  )
}
