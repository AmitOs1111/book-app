const SET_LOADING = 'SET_LOADING'
const SET_BOOKS = 'SET_BOOKS'
const REMOVE_BOOK = 'REMOVE_BOOK'
const ADD_BOOK = 'ADD_BOOK'

const initialState = {
  books: [],
  isLoading: false,
}

export function bookReducer(state = initialState, action) {
  var books
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading }

    case SET_BOOKS:
      return { ...state, books: action.books }
    case REMOVE_BOOK:
      books = state.books.filter((book) => book._id !== action.bookId)
      return { ...state, books: books }
    case 'ADD_BOOK':
      books = [...state.books, action.car]
      return { ...state, cars: books }
    case 'UPDATE_BOOK':
      books = state.books.map((currCar) =>
        currCar._id === action.car._id ? action.car : currCar
      )
      return { ...state, cars: books }

    case 'ADD_TO_CART':
      shoppingCart = [...state.shoppingCart, action.car]
      return { ...state, shoppingCart }
    case 'REMOVE_FROM_CART':
      shoppingCart = state.shoppingCart.filter(
        (car) => car._id !== action.carId
      )
      return { ...state, shoppingCart }

    case 'CLEAR_CART':
      return { ...state, shoppingCart: [] }
    default:
      return state
  }
}
