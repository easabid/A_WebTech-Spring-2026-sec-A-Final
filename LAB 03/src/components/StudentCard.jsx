import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import CourseTag from './CourseTag'
import StatBadge from './StatBadge'
import { StudentContext } from '../contexts/StudentContext.js'

function StudentCard({ student }) {
  const { id, avatar, name, gpa, major, credits, courses } = student
  const { favoriteIds, toggleFavorite } = useContext(StudentContext)
  const [localFavorite, setLocalFavorite] = useState(favoriteIds.includes(id))
  const activeFavorite = favoriteIds.includes(id) || localFavorite

  const handleFavoriteToggle = () => {
    setLocalFavorite((currentFavorite) => !currentFavorite)
    toggleFavorite(id)
  }

  return (
    <article className="student-card">
      <header className="student-card__header">
        <img src={avatar} alt={`${name} avatar`} className="student-card__avatar" />
        <div>
          <h2>{name}</h2>
          <p className="student-card__id">ID: {id}</p>
          <p className="student-card__major">{major}</p>
        </div>
      </header>

      <div className="student-card__stats">
        <StatBadge label="GPA" value={gpa} />
        <StatBadge label="Credits" value={credits} />
      </div>

      <div className="student-card__courses" aria-label={`${name} enrolled courses`}>
        {courses.map((course) => (
          <CourseTag
            key={course.courseName}
            courseName={course.courseName}
            color={course.color}
          />
        ))}
      </div>

      <button
        type="button"
        className={`favorite-toggle ${activeFavorite ? 'favorite-toggle--active' : ''}`}
        onClick={handleFavoriteToggle}
        aria-pressed={activeFavorite}
      >
        {activeFavorite ? '★ Favorited' : '☆ Add Favorite'}
      </button>
    </article>
  )
}

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        courseName: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
}

export default StudentCard
