import { useEffect, useRef, useState } from 'react'
import { utilService } from '../services/util.service'
import { useForm } from '../customHooks/useForm'

export function AppFilter({ filterBy, setFilterBy }) {
  let { title, amount, categories } = filterBy

  onSetFilter = useRef(utilService.debounce(onSetFilter))
  const [filterToEdit, setFilterToEdit, handelChange] = useForm({
    title,
    amount,
    categories,
  })

  useEffect(() => {
    onSetFilter.current(filterToEdit)
    console.log('onSetFilter.current:', onSetFilter.current)
  }, [filterToEdit])

  function onSetFilter(filter) {
    setFilterBy(filter)
  }

  return (
    <section className="app-filter flex space-around">
      <input
        value={filterToEdit.title}
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
        value={filterToEdit.amount}
        onChange={handelChange}
        type="range"
        name="amount"
        placeholder="price"
        min={0}
        max={200}
      />
    </section>
  )
}
