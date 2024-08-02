import { userService } from '../services/user.service.js'

const SET_USER = 'SET_USER'
const SET_USERS = 'SET_USERS'

const initialState = {
  user: userService.getLoggedinUser(),
  users: [],
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }
    case SET_USERS:
      return { ...state, users: action.users }

    default:
      return state
  }
}
