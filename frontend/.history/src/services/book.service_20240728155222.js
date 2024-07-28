import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'bookDB'

export const bookService = {
  query,
  getById,
  save,
  remove,
  getEmptyBook,
}

function query() {
  return storageService.query(STORAGE_KEY)
}
function getById(bookId) {
  return storageService.get(STORAGE_KEY, bookId)
}
function remove(bookId) {
  // return Promise.reject('Not now!');
  return storageService.remove(STORAGE_KEY, bookId)
}
function save(book) {
  if (book._id) {
    return storageService.put(STORAGE_KEY, book)
  } else {
    // When switching to backend - remove the next line!
    // todo.creator = userService.getLoggedinUser()
    return storageService.post(STORAGE_KEY, book)
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
