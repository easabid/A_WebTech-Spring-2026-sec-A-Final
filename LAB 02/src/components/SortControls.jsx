import PropTypes from 'prop-types'

function SortControls({ sortPreference, onSortChange }) {
  return (
    <section className="sort-panel" aria-label="Student sort controls">
      <p className="sort-panel__label">Sort by</p>
      <div className="sort-panel__actions">
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'default' ? 'sort-panel__button--active' : ''}`}
          onClick={() => onSortChange('default')}
        >
          Default
        </button>
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'name' ? 'sort-panel__button--active' : ''}`}
          onClick={() => onSortChange('name')}
        >
          Name (A-Z)
        </button>
        <button
          type="button"
          className={`sort-panel__button ${sortPreference === 'gpa' ? 'sort-panel__button--active' : ''}`}
          onClick={() => onSortChange('gpa')}
        >
          GPA (High-Low)
        </button>
      </div>
    </section>
  )
}

SortControls.propTypes = {
  sortPreference: PropTypes.oneOf(['default', 'name', 'gpa']).isRequired,
  onSortChange: PropTypes.func.isRequired,
}

export default SortControls
