const fs = require('fs')
const { json } = require('body-parser')
const PDFDocument = require('pdfkit')
let gBugs = require('../data/bugs.json')
let gUsers = require('../data/users.json')

module.exports = {
  query,
  getById,
  save,
  remove,
  bugsToPdf,
}

function query(filterBy) {
  let bugsToDisplay = [...gBugs]
  if (filterBy.title) {
    const regExp = new RegExp(filterBy.title, 'i')
    bugsToDisplay = bugsToDisplay.filter((bug) => regExp.test(bug.title))
  }
  if (filterBy.severity) {
    bugsToDisplay = bugsToDisplay.filter(
      (bug) => bug.severity >= filterBy.severity
    )
  }

  return Promise.resolve(bugsToDisplay)
}

function getById(bugId) {
  const bug = gBugs.find((car) => car._id === bugId)
  return Promise.resolve(bug)
}

function remove(bugId, user) {
  const currBug = gBugs.find((bug) => bug._id === bugId)
  if (currBug.owner._id != user._id) return Promise.reject('not your bug!')

  gBugs = gBugs.filter((bug) => bug._id !== bugId)
  return _saveBugsToFile()
}

function save(bug, user) {
  const fullUser = gUsers.find((currUser) => currUser._id === user._id)
  if (bug._id) {
    if (bug.owner._id != fullUser._id) return Promise.reject('not your bug!')

    const bugToUpdate = gBugs.find((currBug) => currBug._id === bug._id)
    bugToUpdate.title = bug.title
    bugToUpdate.severity = bug.severity
    bugToUpdate.description = bug.description
  } else {
    bug._id = _makeId()
    bug.createdAt = new Date()
    bug.owner = fullUser
    gBugs.push(bug)
  }
  return _saveBugsToFile().then(() => {
    return bug
  })
}

function _saveBugsToFile() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(gBugs, null, 2)
    fs.writeFile('data/bugs.json', data, (err) => {
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

function bugsToPdf(bugs) {
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
