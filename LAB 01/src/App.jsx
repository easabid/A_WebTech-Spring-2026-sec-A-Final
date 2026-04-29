import DashboardHeader from './components/DashboardHeader'
import StudentCard from './components/StudentCard'
import './styles/app.css'
import './components/components.css'

const students = [
  {
    name: 'Sabid',
    id: '240101',
    avatar: '/avatars/sabid.jpg',
    gpa: '3.00',
    major: 'Computer Science',
    credits: 96,
    courses: [
      { courseName: 'React Basics', color: '#ef7a62' },
      { courseName: 'Data Structures', color: '#47a17f' },
      { courseName: 'Database Systems', color: '#6c80ff' },
    ],
  },
  {
    name: 'S. Hasina',
    id: '240102',
    avatar: '/avatars/hasina.jpg',
    gpa: '4.00',
    major: 'Information Technology',
    credits: 101,
    courses: [
      { courseName: 'UI Engineering', color: '#cf8c4d' },
      { courseName: 'Operating Systems', color: '#6b8f3e' },
      { courseName: 'Computer Networks', color: '#4d7fd1' },
    ],
  },
  {
    name: 'Che Guevara',
    id: '240103',
    avatar: '/avatars/che.jpg',
    gpa: '4.00',
    major: 'Software Engineering',
    credits: 88,
    courses: [
      { courseName: 'Web Programming', color: '#dc5b77' },
      { courseName: 'Cloud Fundamentals', color: '#5984c9' },
      { courseName: 'DevOps Intro', color: '#8f6fd0' },
    ],
  },
  {
    name: 'Fidel Castro',
    id: '240104',
    avatar: '/avatars/fidel.jpg',
    gpa: '4.00',
    major: 'Artificial Intelligence',
    credits: 93,
    courses: [
      { courseName: 'Machine Learning', color: '#b070d4' },
      { courseName: 'Linear Algebra', color: '#58a38d' },
      { courseName: 'Python for AI', color: '#d08945' },
    ],
  },
]

function App() {
  return (
    <div className="app-shell">
      <DashboardHeader
        title="Academic Pulse"
        tagline="Track student profiles, course loads, and core academic stats in one compact dashboard."
        navItems={['Overview', 'Students', 'Courses', 'Reports']}
        totalStudents={students.length}
        avgGpa="3.75"
      />

      <main className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            id={student.id}
            avatar={student.avatar}
            gpa={student.gpa}
            major={student.major}
            credits={student.credits}
            courses={student.courses}
          />
        ))}
      </main>
    </div>
  )
}

export default App
