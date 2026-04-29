import { useContext } from 'react'
import PropTypes from 'prop-types'
import StatBadge from './StatBadge'
import { ThemeContext } from '../contexts/ThemeContext.js'

function DashboardHeader({ title, tagline, navItems, totalStudents, avgGpa, favoritesCount }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="dashboard-header">
      <div className="dashboard-header__top">
        <div>
          <p className="dashboard-header__eyebrow">Student Dashboard</p>
          <h1>{title}</h1>
          <p className="dashboard-header__tagline">{tagline}</p>
        </div>

        <div className="dashboard-header__actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          <div className="dashboard-header__stats">
            <StatBadge label="Students" value={totalStudents} />
            <StatBadge label="Average GPA" value={avgGpa} />
            <StatBadge label="Favorites" value={favoritesCount} />
          </div>
        </div>
      </div>

      <nav aria-label="Main navigation">
        <ul className="dashboard-nav">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalStudents: PropTypes.number.isRequired,
  avgGpa: PropTypes.string.isRequired,
  favoritesCount: PropTypes.number.isRequired,
}

export default DashboardHeader
