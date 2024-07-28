export function PrepareBook({ togglePrepareBook }) {
  return (
    <section className="prepare-book">
      <div className="header-prepare-book flex space-between">
        <h2>prepare a new Book</h2>
        <button onClick={() => togglePrepareBook()}>x</button>
      </div>

      <form>
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
      </form>
    </section>
  )
}
