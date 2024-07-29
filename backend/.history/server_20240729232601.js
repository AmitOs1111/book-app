const express = require('express')
const cookieParser = require('cookie-parser')

const bookService = require('./services/book.service')
const userService = require('./services/user.service')

const app = express()

// Express APp Configurations
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())

//**************BUG API ************/

app.get('/api/book', (req, res) => {
  const queryParams = req.query
  const filterBy = {
    title: queryParams.title,
    amount: queryParams.amount,
  }
  bookService.query(filterBy).then((books) => res.send(books))
})

app.get('/api/book/pdf', (req, res) => {
  const queryParams = req.query
  const filterBy = {
    title: queryParams.title,
    amount: queryParams.amount,
  }

  bookService
    .query(filterBy)
    .then((books) => {
      console.log(books)
      bookService.bugsToPdf(books)
    })
    .then(() => res.send('succeed to download PDF'))
})

app.post('/api/book', (req, res) => {
  const { book, user } = req.body

  bookService.save(book, user).then((book) => {
    console.log('bug', book)
    res.send(book)
  })
})

app.put('/api/book', (req, res) => {
  const book = req.body
  bookService.save(book).then((book) => res.send(book))
})

app.get('/api/book/:bookId', (req, res) => {
  const { bookId } = req.params
  // let visitedbooksIds = req.cookies.visitedBugsIds || []
  // if (!visitedbooksIds.includes(bookId)) visitedbooksIds.push(bookId)
  // if (visitedbooksIds.length > 3) return res.status(401).send('Wait for a bit')
  bookService
    .getById(bookId)
    .then((book) => {
      // res.cookie('visitedBugsIds', visitedbooksIds, { maxAge: 1000 * 7 })
      res.send(book)
    })
    .catch((err) => res.status(403).send(err))
})

app.delete('/api/book/:bookId', (req, res) => {
  const { bookId } = req.params
  const user = req.query
  bookService
    .remove(bookId, user)
    .then(() => res.send({ msg: 'Removed succesfully' }))
})

//**************USER API ************/

app.get('/api/auth/user/:userId', (req, res) => {
  const { userId } = req.params
  userService.getById(userId).then((user) => res.send(user))
})

app.post('/api/auth/user/login', (req, res) => {
  const credentials = req.body
  userService
    .checkLogin(credentials)
    .then((user) => {
      const loginToken = userService.getLoginToken(user)
      res.cookie('loginToken', loginToken)
      res.send(user)
    })
    .catch((err) => {
      console.log('No such user', err)
      res.status(403).send('Invalid Credentials')
    })
})

app.post('/api/auth/user/signup', (req, res) => {
  const credentials = req.body
  userService
    .signup(credentials)
    .then((user) => {
      const loginToken = userService.getLoginToken(user)
      res.cookie('loginToken', loginToken)
      res.send(user)
    })
    .catch((err) => {
      console.log('error', err)
      res.status(400).send('Cannot signup')
    })
})

app.post('/api/auth/user/logout', (req, res) => {
  res.clearCookie('loggedInUser')
  // res.clearCookie('userId')
  res.send('Logged out')
})

app.listen(3030, () => console.log('Server listening on port 3030!'))
