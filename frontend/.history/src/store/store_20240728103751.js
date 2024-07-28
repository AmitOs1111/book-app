import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user.reducer.js'
import { carReducer } from './car.reducer.js'

const rootReducer = combineReducers({
  carModule: carReducer,
  userModule: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

// For debug only!
store.subscribe(() => {
  console.log('Store state is:', store.getState())
})
