import { useEffect, useRef, useState } from 'react'
import { utilService } from '../services/util.service'
import { useForm } from '../customHooks/useForm'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

export function AppFilter({ filterBy, setFilterBy }) {
  let { title, amount, categories } = filterBy

  const [filterToEdit, setFilterToEdit, handelChange] = useForm({
    title,
    amount,
    categories,
  })
  onSetFilter = useRef(utilService.debounce(onSetFilter))

  useEffect(() => {
    onSetFilter.current(filterToEdit)
    // eslint - disable - next - line
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
      {/* <select>
        <option value="action">Action</option>
        <option value="romantic">Romantic</option>
        <option value="computer">Computer</option>
      </select> */}
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
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
