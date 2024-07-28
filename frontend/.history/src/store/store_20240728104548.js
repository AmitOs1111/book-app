import { combineReducers, legacy_createStore as createStore } from 'redux'
import { userReducer } from './user.reducer.js'
import { bookReducer } from './book.reducer.js'

const rootReducer = combineReducers({
  bookModule: bookReducer,
  userModule: userReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export const store = createStore(rootReducer, middleware)

// For debug only!
store.subscribe(() => {
  console.log('Store state is:', store.getState())
})
