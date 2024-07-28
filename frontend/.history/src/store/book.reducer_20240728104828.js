const initialState = {
  books: [],
  isLoading: false,
}

export function bookReducer(state = initialState, action) {
  var cars
  var shoppingCart
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading }

    case 'SET_CARS':
      return { ...state, cars: action.cars }
    case 'REMOVE_CAR':
      cars = state.books.filter((car) => car._id !== action.carId)
      return { ...state, cars }
    case 'ADD_CAR':
      cars = [...state.books, action.car]
      return { ...state, cars }
    case 'UPDATE_CAR':
      cars = state.books.map((currCar) =>
        currCar._id === action.car._id ? action.car : currCar
      )
      return { ...state, cars }

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
