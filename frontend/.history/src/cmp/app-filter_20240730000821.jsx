import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { utilService } from '../services/util.service'

export function AppFilter() {
  const dispatch = useDispatch()
  const [filterToEdit, setFilterToEdit] = useState({
    title: '',
    amount: 0,
    categories: '',
  })
  onSetFilter = useRef(utilService.debounce(onSetFilter))

  useEffect(() => {
    onSetFilter.current(filterToEdit)
  }, [filterToEdit])

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'range' ? +target.value : target.value
    setFilterToEdit((prevFilterToEdit) => ({
      ...prevFilterToEdit,
      [field]: value,
    }))
  }

  function onSetFilter(filter) {
    dispatch({ type: 'SET_FILTER_BY', filter })
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
