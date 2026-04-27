import PropTypes from 'prop-types'

function StatBadge({ label, value }) {
  return (
    <div className="stat-badge" role="status" aria-label={`${label}: ${value}`}>
      <span className="stat-badge__label">{label}</span>
      <span className="stat-badge__value">{value}</span>
    </div>
  )
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default StatBadge
