import DashboardHeader from './components/DashboardHeader'
import SearchBar from './components/SearchBar'
import SortControls from './components/SortControls'
import StudentCard from './components/StudentCard'
import { useContext } from 'react'
import { StudentContext } from './contexts/StudentContext.js'
import './styles/app.css'
import './components/components.css'

function App() {
  const {
    isLoading,
    favoriteIds,
    displayedStudents,
    toggleFavorite,
  } = useContext(StudentContext)

  return (
    <div className="app-shell">
      <DashboardHeader
        title="Academic Pulse"
        tagline="Track student profiles, course loads, and core academic stats in one compact dashboard."
        navItems={['Overview', 'Students', 'Courses', 'Reports']}
        avgGpa="3.75"
      />

      {isLoading ? (
        <main className="loading-shell" aria-live="polite">
          <div className="loading-spinner" aria-hidden="true" />
          <p>Loading students...</p>
        </main>
      ) : (
        <>
          <SearchBar />

          <SortControls />

          <main className="student-grid">
            {displayedStudents.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                isFavorite={favoriteIds.includes(student.id)}
                onFavoriteToggle={toggleFavorite}
              />
            ))}
          </main>
        </>
      )}
    </div>
  )
}

export default App
