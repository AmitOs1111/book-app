const fs = require('fs')

const Cryptr = require('cryptr')
const cryptr = new Cryptr('secret-puk-xyz-123')

const gUsers = require('../data/users.json')

module.exports = {
  signup,
  getById,
  checkLogin,
  getLoginToken,
  validateToken,
  query,
}

function query() {
  return Promise.resolve(gUsers)
}

function signup({ username, fullname, password }) {
  const userExist = gUsers.find((user) => user.username === username)
  if (userExist) return Promise.reject('Username is taken')

  let user = {
    _id: _makeId(),
    username,
    fullname,
    password,
    src: `https://robohash.org/${username}?set=set1`,
  }
  gUsers.push(user)
  let miniUser = _getMiniUser(user)

  return _saveUsersToFile().then(() => miniUser)
}

function getById(userId) {
  const user = gUsers.find((user) => user._id === userId)
  if (!user) return Promise.reject('not found user')
  return Promise.resolve(user)
}

function checkLogin(credentials) {
  var user = gUsers.find(
    (user) =>
      user.username === credentials.username &&
      user.password === credentials.password
  )
  if (!user) return Promise.reject('not found user, please sign up')

  let miniUser = _getMiniUser(user)

  return Promise.resolve(miniUser)
}

function getLoginToken(user) {
  return cryptr.encrypt(JSON.stringify(user))
}

function validateToken(loginToken) {
  try {
    const json = cryptr.decrypt(loginToken)
    const loggedinUser = JSON.parse(json)
    return loggedinUser
  } catch (err) {
    console.log('Invalid login token')
  }
  return null
}

function _saveUsersToFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile('data/users.json', JSON.stringify(gUsers, null, 2), (err) => {
      if (err) {
        console.log(err)
        reject('Cannot write to file')
      } else {
        console.log('Wrote Successfully!')
        resolve()
      }
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

function _getMiniUser(user) {
  return {
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    src: user.src,
  }
}
