const SET_LOADING = 'SET_LOADING'
const SET_BOOKS = 'SET_BOOKS'
const REMOVE_BOOK = 'REMOVE_BOOK'
const ADD_BOOK = 'ADD_BOOK'
const UPDATE_BOOK = 'UPDATE_BOOK'

const initialState = {
  books: [],
  isLoading: false,
}

export function bookReducer(state = initialState, action) {
  let books
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading }

    case SET_BOOKS:
      return { ...state, books: action.books }
    case REMOVE_BOOK:
      books = state.books.filter((book) => book._id !== action.bookId)
      return { ...state, books: books }
    case ADD_BOOK:
      books = [action.book, ...state.books]
      return { ...state, books: books }
    case UPDATE_BOOK:
      books = state.books.map((currBook) =>
        currBook._id === action.book._id ? action.book : currBook
      )
      return { ...state, books: books }

    default:
      return state
  }
}
