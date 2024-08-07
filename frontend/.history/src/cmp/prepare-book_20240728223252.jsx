import { useState } from 'react'
import { AppLoader } from '../pages/app-loader'
import { dataService } from '../services/demo.data'
import { utilService } from '../services/util.service'

export function PrepareBook({ addBook, togglePrepareBook }) {
  const randomIdx = utilService.getRandomIntInclusive(0, 5)
  let randomBook = dataService.getDataBooks()[randomIdx]
  //   let randomBook = books[randomIdx]
  randomBook._id = null

  const [book, setBook] = useState(randomBook)

  function handelChange({ target }) {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value

    setBook((prevBook) => ({ ...prevBook, [field]: value }))
  }

  function onAddBook(ev) {
    // ev.PreventDefault()
    console.log('Submit!', book)
    addBook(book)
  }
  if (!book) return <AppLoader />

  return (
    <section className="prepare-book">
      <div className="header-prepare-book flex space-between">
        <h2>prepare a new Book</h2>
        <button onClick={() => togglePrepareBook()}>x</button>
      </div>

      <form className="flex column">
        <input
          onChange={handelChange}
          value={book.title}
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          onChange={handelChange}
          value={book.subtitle}
          type="text"
          name="subtitle"
          placeholder="subtitle"
        />
        <input
          onChange={handelChange}
          value={book.authors[0]}
          type="text"
          name="authors"
          placeholder="authors"
        />
        <input
          onChange={handelChange}
          value={book.publishedDate}
          type="number"
          name="publishedDate"
          placeholder="publishedDate"
        />
        <textarea
          onChange={handelChange}
          value={book.description}
          name="description"
          cols="30"
          rows="5"
        ></textarea>
        <input
          onChange={handelChange}
          value={book.pageCount}
          type="number"
          name="pageCount"
          placeholder="pageCount"
        />
        <select name="categories" id="">
          <option value="Computers">Computers</option>
          <option value="Hack">Hack</option>
        </select>
        <input
          onChange={handelChange}
          value={book.thumbnail}
          type="text"
          name="thumbnail"
          placeholder="thumbnail"
        />
        <select name="language">
          <option value="En">En</option>
          <option value="Sp">Sp</option>
          <option value="He">HE</option>
        </select>
        <input
          onChange={handelChange}
          value={book.listPrice.amount}
          type="number"
          name="amount"
          placeholder="amount"
        />
      </form>
      <button onClick={() => onAddBook()}>Submit</button>
    </section>
  )
}
