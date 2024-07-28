import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'bookDB'

export const todoService = {
  query,
  getById,
  save,
  remove,
  getEmptyBook,
}

function query(filterBy) {
  return storageService.query(STORAGE_KEY, filterBy)
}
function getById(todoId) {
  return storageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
  // return Promise.reject('Not now!');
  return storageService.remove(STORAGE_KEY, todoId)
}
function save(todo) {
  if (todo._id) {
    return storageService.put(STORAGE_KEY, todo)
  } else {
    // When switching to backend - remove the next line!
    // todo.creator = userService.getLoggedinUser()
    return storageService.post(STORAGE_KEY, todo)
  }
}
function getEmptyBook() {
  return {
    _id: utilService.makeId(),
    txt: utilService.makeLorem(5),
    important: utilService.getRandomIntInclusive(1, 10),
    isDone: false,
    createdAt: Date.now(),
    creator: { name: 'Puki', _id: utilService.makeId() },
  }
}
