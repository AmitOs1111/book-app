import { userService } from '../services/user.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { store } from './store.js'
import { SET_USER, SET_USERS } from './user.reducer.js'

export function loadUsers(filterBY) {
  // store.dispatch({ type: SET_LOADING, isLoading: true })

  return userService
    .query(filterBY)
    .then((users) => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
      store.dispatch({ type: SET_USERS, users })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot load users')
      throw err
    })
    .finally(() => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function checkLogin(user) {
  return userService
    .login(user)
    .then((user) => {
      store.dispatch({ type: SET_USER, user })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot login user')
      throw err
    })
}

export function checkSignIn(user) {
  return userService
    .signup(user)
    .then((user) => {
      store.dispatch({ type: SET_USER, user })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot signup user')
      throw err
    })
}
