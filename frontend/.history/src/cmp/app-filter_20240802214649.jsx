import { useEffect, useRef, useState } from 'react'
import { utilService } from '../services/util.service'
import { useForm } from '../customHooks/useForm'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'

import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Slider from '@mui/material/Slider'

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

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categories</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={Categories}
            // label="Categories"
            // onChange={handleChange}
          >
            <MenuItem value={''}>All</MenuItem>
            <MenuItem value={'action'}>Action</MenuItem>
            <MenuItem value={'computer'}>Computer</MenuItem>
            <MenuItem value={'love'}>Love</MenuItem>
            <MenuItem value={'Finance'}>Finance</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <input
        value={filterToEdit.amount}
        onChange={handelChange}
        type="range"
        name="amount"
        placeholder="price"
        min={0}
        max={200}
      /> */}

      <Slider
        name="amount"
        value={filterToEdit.amount}
        onChange={handelChange}
        defaultValue={20}
        aria-label="Default"
        valueLabelDisplay="auto"
        max={100}
      />
    </section>
  )
}
