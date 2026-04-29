import PropTypes from 'prop-types'

function SearchBar({ query, onQueryChange }) {
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
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </section>
  )
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
}

export default SearchBar
