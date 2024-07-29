const fs = require('fs')
const { json } = require('body-parser')
const PDFDocument = require('pdfkit')
let gBook = require('../data/books.json')
let gUsers = require('../data/users.json')

module.exports = {
  query,
  getById,
  save,
  remove,
  booksToPdf,
}

function query(filterBy) {
  let booksToDisplay = [...gBook]
  if (filterBy.title) {
    const regExp = new RegExp(filterBy.title, 'i')
    booksToDisplay = booksToDisplay.filter((book) => regExp.test(book.title))
  }
  if (filterBy.amount) {
    booksToDisplay = booksToDisplay.filter(
      (book) => book.listPrice.amount >= filterBy.amount
    )
  }

  return Promise.resolve(booksToDisplay)
}

function getById(bookId) {
  const book = gBook.find((book) => book._id === bookId)
  return Promise.resolve(book)
}

function remove(bookId, user) {
  const currBook = gBook.find((book) => book._id === bookId)
  if (currBook.owner._id != user._id) return Promise.reject('not your bug!')

  gBook = gBook.filter((book) => book._id !== bookId)
  return _saveBugsToFile()
}

function save(book, user) {
  const fullUser = gUsers.find((currUser) => currUser._id === user._id)
  if (book._id) {
    if (book.owner._id != fullUser._id) return Promise.reject('not your book!')

    const bookToUpdate = gBook.find((currBook) => currBook._id === book._id)
    bookToUpdate.title = book.title
    // bookToUpdate.severity = book.s
    // bookToUpdate.description = book.description
  } else {
    book._id = _makeId()
    book.createdAt = new Date()
    book.owner = fullUser
    gBook.push(book)
  }
  return _saveBugsToFile().then(() => {
    return book
  })
}

function _saveBugsToFile() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(gBook, null, 2)
    fs.writeFile('data/books.json', data, (err) => {
      if (err) return reject('Cannot save to file')
      resolve()
    })
  })
}

function _makeId(length = 5) {
  var txt = ''
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function booksToPdf(bugs) {
  const doc = new PDFDocument()
  doc.pipe(fs.createWriteStream('pdf-bug.pdf'))
  bugs.forEach((bug) => {
    doc.text(`the bug name 🐛: ${bug.title}`)
    doc.moveDown()
    doc.text(`severity: ${bug.severity}`)
    doc.moveDown()
  })
  doc.end()
  Promise.resolve('Done')
}
