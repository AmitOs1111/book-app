import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'bookDB'
const BASE_URL = 'api/book/'

export const bookService = {
  query,
  getById,
  save,
  remove,
  getEmptyBook,
}

function query(filterBy) {
  return httpService.get(BASE_URL, filterBy)
  // return storageService.query(STORAGE_KEY, filterBy)
}
function getById(bookId) {
  return httpService.get(BASE_URL + bookId)
  // return storageService.get(STORAGE_KEY, bookId)
}
function remove(bookId) {
  // return Promise.reject('Not now!');
  return httpService.delete(BASE_URL, bookId)
  // return storageService.remove(STORAGE_KEY, bookId)
}
function save(book) {
  if (book._id) {
    return httpService.put(BASE_URL, book)
    // return storageService.put(STORAGE_KEY, book)
  } else {
    // When switching to backend - remove the next line!
    // todo.creator = userService.getLoggedinUser()
    return httpService.post(BASE_URL, book)
    // return storageService.post(STORAGE_KEY, book)
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
