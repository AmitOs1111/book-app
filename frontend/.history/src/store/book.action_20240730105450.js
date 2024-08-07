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

export function loadBooks() {
  return (dispatch, getState) => {
    dispatch({ type: SET_LOADING, isLoading: true })

    const { appFilter } = getState().bookModule

    bookService
      .query(appFilter)
      .then((books) => {
        console.log('Books from DB:', books)
        dispatch({ type: SET_BOOKS, books })
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot load books')
      })
      .finally(() => {
        dispatch({ type: SET_LOADING, isLoading: false })
      })
  }
}

export function removeBook(bookId) {
  return (dispatch) => {
    bookService
      .remove(bookId)
      .then(() => {
        console.log('Deleted Succesfully!')
        dispatch({ type: REMOVE_BOOK, bookId })
        showSuccessMsg('Book removed')
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot remove book')
      })
  }
}

export function addBook(book) {
  return (dispatch) => {
    // const book = bookService.getEmptyCar()
    bookService
      .save(book)
      .then((savedBook) => {
        console.log('Added book', savedBook)
        dispatch({ type: ADD_BOOK, book: savedBook })
        showSuccessMsg('book added')
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot add book')
      })
  }
}

export function updateBook(book) {
  return (dispatch) => {
    bookService
      .save(book)
      .then((savedBook) => {
        console.log('Updated book:', savedBook)
        dispatch({ type: UPDATE_BOOK, book: savedBook })
        showSuccessMsg('book updated')
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot update book')
      })
  }
}
