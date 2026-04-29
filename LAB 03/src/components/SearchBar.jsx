import { useContext } from 'react'
import { StudentContext } from '../contexts/StudentContext.js'

function SearchBar() {
  const { query, setQuery } = useContext(StudentContext)

  return (
    <section className="search-panel" aria-label="Student search controls">
      <label htmlFor="student-search" className="search-panel__label">
        Search students
      </label>
      <input
        id="student-search"
        type="search"
        className="search-panel__input"
        placeholder="Search by name or major"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </section>
  )
}

export default SearchBar
