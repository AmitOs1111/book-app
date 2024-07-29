const express = require('express')
const cookieParser = require('cookie-parser')

const bugService = require('./services/bug.service')
const userService = require('./services/user.service')

const app = express()

// Express APp Configurations
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())

//**************BUG API ************/

app.get('/api/bug', (req, res) => {
  const queryParams = req.query
  const filterBy = {
    title: queryParams.title,
    severity: queryParams.severity,
  }
  bugService.query(filterBy).then((bugs) => res.send(bugs))
})

app.get('/api/bug/pdf', (req, res) => {
  const queryParams = req.query
  const filterBy = {
    title: queryParams.title,
    severity: queryParams.severity,
  }

  bugService
    .query(filterBy)
    .then((bugs) => {
      console.log(bugs)
      bugService.bugsToPdf(bugs)
    })
    .then(() => res.send('succeed to download PDF'))
})

app.post('/api/bug', (req, res) => {
  const { bug, user } = req.body

  bugService.save(bug, user).then((bug) => {
    console.log('bug', bug)
    res.send(bug)
  })
})

app.put('/api/bug', (req, res) => {
  const bug = req.body
  bugService.save(bug).then((car) => res.send(car))
})

app.get('/api/bug/:bugId', (req, res) => {
  const { bugId } = req.params
  let visitedBugsIds = req.cookies.visitedBugsIds || []
  if (!visitedBugsIds.includes(bugId)) visitedBugsIds.push(bugId)
  if (visitedBugsIds.length > 3) return res.status(401).send('Wait for a bit')
  bugService
    .getById(bugId)
    .then((bug) => {
      res.cookie('visitedBugsIds', visitedBugsIds, { maxAge: 1000 * 7 })
      res.send(bug)
    })
    .catch((err) => res.status(403).send(err))
})

app.delete('/api/bug/:bugId', (req, res) => {
  const { bugId } = req.params
  const user = req.query
  bugService
    .remove(bugId, user)
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
