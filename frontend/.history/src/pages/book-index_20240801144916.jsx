import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bookService } from '../services/book.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { BookList } from '../cmp/book-list.jsx'
import { AppLoader } from '../pages/app-loader.jsx'
import { BookEdit } from '../cmp/book-edit.jsx'
import { AppFilter } from '../cmp/app-filter.jsx'
import { loadBooks, removeBook } from '../store/book.action'
import { useEffectUpdate } from '../customHooks/useEffectUpdate.js'

export function BookIndex() {
  const dispatch = useDispatch()
  let { books, isLoading } = useSelector((state) => state.bookModule)
  let filterBy = useSelector((state) => state.bookModule.appFilter)

  const [isPrepareBook, setIsPrepareBook] = useState(false)
  const [isFirstFilterBy, setIsFirstFilterBy] = useState(true)

  useEffect(() => {
    loadBooks(filterBy)
  }, [])

  useEffectUpdate(() => {
    loadBooks(filterBy)
    // eslint - disable - next - line
  }, [filterBy])

  useEffectUpdate(() => {
    dispatch({ type: 'SET_DARK_SCREEN', isDarkScreen: isPrepareBook })
  }, [isPrepareBook])

  function onRemoveBook(bookId) {
    removeBook(bookId)
  }

  function togglePrepareBook() {
    setIsPrepareBook((prevIsPrepareBook) => !prevIsPrepareBook)
  }

  function setFilterBy(filter) {
    // if (isFirstFilterBy) {
    //   setIsFirstFilterBy(false)
    //   return
    // }
    console.log('filter:', filter)
    dispatch({ type: 'SET_FILTER_BY', filter })
  }

  if (isLoading) return <AppLoader />
  return (
    <section className="book-index">
      <div className="header-book-index flex align-center">
        <AppFilter filterBy={filterBy} setFilterBy={setFilterBy} />

        <button onClick={() => togglePrepareBook()}>add new book</button>
      </div>
      <BookList books={books} onRemoveBook={onRemoveBook} />
      {isPrepareBook && <BookEdit togglePrepareBook={togglePrepareBook} />}
    </section>
  )
}
