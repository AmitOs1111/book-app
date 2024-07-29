import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { utilService } from '../services/util.service'

export function AppFilter() {
  const dispatch = useDispatch()
  let filterBy = useSelector((state) => state.bookModule.filterBy)
  onSetFilter = useRef(utilService.debounce(onSetFilter))

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'range' ? +target.value : target.value
    // console.log('filterBy', filterBy)

    const filter = { ...filterBy, [field]: value }
    utilService.debounce(setFilterBy(filter))
  }

  function onSetFilter() {
    console.log('onSetFilter')
  }

  function setFilterBy(filter) {
    console.log('filterBy', filter)
    dispatch({ type: 'SET_FILTER_BY', filter })
  }

  return (
    <section className="app-filter flex">
      <input
        value={filterBy.title}
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
        value={filterBy.amount}
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
