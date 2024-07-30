import { bookService } from '../services/book.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadCars() {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_LOADING', isLoading: true })

    const { appFilter } = getState().bookModule

    bookService
      .query(appFilter)
      .then((books) => {
        console.log('Books from DB:', books)
        dispatch({ type: 'SET_BOOKS', books })
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot load books')
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', isLoading: false })
      })
  }
}

export function removeBook(bookId) {
  return (dispatch) => {
    bookService
      .remove(bookId)
      .then(() => {
        console.log('Deleted Succesfully!')
        dispatch({ type: 'REMOVE_BOOK', bookId })
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
    const car = bookService.getEmptyCar()
    bookService
      .save(car)
      .then((savedCar) => {
        console.log('Added Car', savedCar)
        dispatch({ type: 'ADD_CAR', car: savedCar })
        showSuccessMsg('Car added')
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot add car')
      })
  }
}

export function updateBook(book) {
  return (dispatch) => {
    bookService
      .save(book)
      .then((savedCar) => {
        console.log('Updated Car:', savedCar)
        dispatch({ type: 'UPDATE_CAR', car: savedCar })
        showSuccessMsg('Car updated')
      })
      .catch((err) => {
        console.error('Oops:', err)
        showErrorMsg('Cannot update car')
      })
  }
}
