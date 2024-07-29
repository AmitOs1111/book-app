import { useDispatch, useSelector } from 'react-redux'

export function AppFilter() {
  const dispatch = useDispatch()
  let filterBy = useSelector((state) => state.bookModule.filterBy)

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'range' ? +target.value : target.value
    console.log('filterBy', filterBy)
    // setBook((prevBook) => ({ ...prevBook, [field]: value }))
  }

  return (
    <section className="app-filter flex">
      <input
        onChange={handelChange}
        type="search"
        name="title"
        placeholder="Search..."
      />
      <select>
        <option value="action">Action</option>
        <option value="romantic">Romantic</option>
        <option value="computer">Computer</option>
      </select>
      <input
        onChange={handelChange}
        type="range"
        name="amount"
        placeholder="price"
        min={10}
        max={200}
      />
    </section>
  )
}
