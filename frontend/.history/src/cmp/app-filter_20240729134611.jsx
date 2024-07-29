export function AppFilter() {
  return (
    <section className="app-filter flex">
      <input type="search" name="title" placeholder="Search..." />
      <select>
        <option value="action">Action</option>
        <option value="romantic">Romantic</option>
        <option value="computer">Computer</option>
      </select>
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
