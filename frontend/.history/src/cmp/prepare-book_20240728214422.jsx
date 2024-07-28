import { useState } from 'react'
import { AppLoader } from '../pages/app-loader'
import { dataService } from '../services/demo.data'
import { utilService } from '../services/util.service'

export function PrepareBook({ togglePrepareBook }) {
  const randomIdx = utilService.getRandomIntInclusive(0, 5)
  const randomBook = dataService.getDataBooks()[randomIdx]
  const [book, setBook] = useState(randomBook)

  function onAddBook() {
    // ev.PreventDefault()

    console.log('Submit!')
  }
  if (!book) return <AppLoader />
  console.log('book', book)
  return (
    <section className="prepare-book">
      <div className="header-prepare-book flex space-between">
        <h2>prepare a new Book</h2>
        <button onClick={() => togglePrepareBook()}>x</button>
      </div>

      <form className="flex column" onSubmit={() => onAddBook()}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="subtitle" placeholder="subtitle" />
        <input type="text" name="authors" placeholder="authors" />
        <input type="number" name="publishedDate" placeholder="publishedDate" />
        <textarea name="description" cols="30" rows="5"></textarea>
        <input type="number" name="pageCount" placeholder="pageCount" />
        <select name="categories" id="">
          <option value="Computers">Computers</option>
          <option value="Hack">Hack</option>
        </select>
        <input type="text" name="thumbnail" placeholder="thumbnail" />
        <select name="language">
          <option value="En">En</option>
          <option value="Sp">Sp</option>
          <option value="He">HE</option>
        </select>
        <input type="number" name="amount" placeholder="amount" />
        <button>Submit</button>
      </form>
    </section>
  )
}
