import { useState } from 'react'
import PropTypes from 'prop-types'
import CourseTag from './CourseTag'
import StatBadge from './StatBadge'

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  credits,
  courses,
  initialFavorite,
  onFavoriteChange,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleFavoriteToggle = () => {
    const nextFavoriteState = !isFavorite
    setIsFavorite(nextFavoriteState)
    onFavoriteChange(id, nextFavoriteState)
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
        className={`favorite-toggle ${isFavorite ? 'favorite-toggle--active' : ''}`}
        onClick={handleFavoriteToggle}
        aria-pressed={isFavorite}
      >
        {isFavorite ? '★ Favorited' : '☆ Add Favorite'}
      </button>
    </article>
  )
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  credits: PropTypes.number.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  initialFavorite: PropTypes.bool.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
}

export default StudentCard
