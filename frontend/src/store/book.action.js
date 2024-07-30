import { bookService } from '../services/book.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { store } from './store.js'
import {
  SET_LOADING,
  SET_BOOKS,
  REMOVE_BOOK,
  ADD_BOOK,
  UPDATE_BOOK,
} from './book.reducer.js'

export function loadBooks(filterBY) {
  store.dispatch({ type: SET_LOADING, isLoading: true })

  return bookService
    .query(filterBY)
    .then((books) => {
      store.dispatch({ type: SET_BOOKS, books })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot load books')
      throw err
    })
    .finally(() => {
      store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function removeBook(bookId) {
  return bookService
    .remove(bookId)
    .then(() => {
      console.log('Deleted Succesfully!')
      store.dispatch({ type: REMOVE_BOOK, bookId })
      showSuccessMsg('Book removed')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot remove book')
      throw err
    })
}

export function addBook(book) {
  // const book = bookService.getEmptyCar()
  return bookService
    .save(book)
    .then((savedBook) => {
      console.log('Added book', savedBook)
      store.dispatch({ type: ADD_BOOK, book: savedBook })
      showSuccessMsg('book added')
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot add book')
      throw err
    })
}

export function updateBook(book) {
  console.log('book', book)
  return bookService
    .save(book)
    .then((savedBook) => {
      console.log('Updated book:', savedBook)
      store.dispatch({ type: UPDATE_BOOK, book: savedBook })
      showSuccessMsg('book updated')
      return Promise.resolve()
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot update book')
      throw err
    })
}
