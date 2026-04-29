import { useContext } from 'react'
import { StudentContext } from '../contexts/StudentContext.js'

function SortControls() {
  const { sortPreference, setSortPreference } = useContext(StudentContext)

  return (
    <section className="sort-panel" aria-label="Student sort controls">
      <p className="sort-panel__label">Sort by</p>
      <div className="sort-panel__actions">
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'default' ? 'sort-panel__button--active' : ''}`}
          onClick={() => setSortPreference('default')}
        >
          Default
        </button>
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'name' ? 'sort-panel__button--active' : ''}`}
          onClick={() => setSortPreference('name')}
        >
          Name (A-Z)
        </button>
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'gpa' ? 'sort-panel__button--active' : ''}`}
          onClick={() => setSortPreference('gpa')}
        >
          GPA (High-Low)
        </button>
      </div>
    </section>
  )
}

export default SortControls
