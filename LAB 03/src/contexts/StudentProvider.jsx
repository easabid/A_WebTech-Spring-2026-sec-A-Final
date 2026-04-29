import { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { StudentContext } from './StudentContext.js'

const initialStudents = [
  {
    name: 'A Sabid',
    id: '240101',
    avatar: '/avatars/student-1.svg',
    gpa: '3.8',
    major: 'Computer Science',
    credits: 96,
    courses: [
      { courseName: 'React Basics', color: '#ef7a62' },
      { courseName: 'Data Structures', color: '#47a17f' },
      { courseName: 'Database Systems', color: '#6c80ff' },
    ],
  },
  {
    name: 'Mr Neta',
    id: '240102',
    avatar: '/avatars/student-2.svg',
    gpa: '3.9',
    major: 'Information Technology',
    credits: 101,
    courses: [
      { courseName: 'UI Engineering', color: '#cf8c4d' },
      { courseName: 'Operating Systems', color: '#6b8f3e' },
      { courseName: 'Computer Networks', color: '#4d7fd1' },
    ],
  },
  {
    name: 'Rian Dog',
    id: '240103',
    avatar: '/avatars/student-3.svg',
    gpa: '3.6',
    major: 'Software Engineering',
    credits: 88,
    courses: [
      { courseName: 'Web Programming', color: '#dc5b77' },
      { courseName: 'Cloud Fundamentals', color: '#5984c9' },
      { courseName: 'DevOps Intro', color: '#8f6fd0' },
    ],
  },
  {
    name: 'Fardin Kha',
    id: '240104',
    avatar: '/avatars/student-4.svg',
    gpa: '3.7',
    major: 'Artificial Intelligence',
    credits: 93,
    courses: [
      { courseName: 'Machine Learning', color: '#b070d4' },
      { courseName: 'Linear Algebra', color: '#58a38d' },
      { courseName: 'Python for AI', color: '#d08945' },
    ],
  },
]

function StudentProvider({ children }) {
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [sortPreference, setSortPreference] = useState('default')
  const [favoriteIds, setFavoriteIds] = useState([])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setStudents(initialStudents)
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timerId)
  }, [])

  const normalizedQuery = query.trim().toLowerCase()
  const filteredStudents = students.filter((student) => {
    if (!normalizedQuery) {
      return true
    }

    return (
      student.name.toLowerCase().includes(normalizedQuery) ||
      student.major.toLowerCase().includes(normalizedQuery)
    )
  })

  const displayedStudents = [...filteredStudents].sort((firstStudent, secondStudent) => {
    if (sortPreference === 'name') {
      return firstStudent.name.localeCompare(secondStudent.name)
    }

    if (sortPreference === 'gpa') {
      return Number(secondStudent.gpa) - Number(firstStudent.gpa)
    }

    return 0
  })

  useEffect(() => {
    const label = filteredStudents.length === 1 ? 'Student' : 'Students'
    document.title = `Dashboard - ${filteredStudents.length} ${label}`
  }, [filteredStudents.length])

  const toggleFavorite = useCallback((studentId) => {
    setFavoriteIds((currentFavoriteIds) => {
      if (currentFavoriteIds.includes(studentId)) {
        return currentFavoriteIds.filter((id) => id !== studentId)
      }

      return [...currentFavoriteIds, studentId]
    })
  }, [])

  const addStudent = useCallback((student) => {
    setStudents((currentStudents) => [...currentStudents, student])
  }, [])

  const value = useMemo(
    () => ({
      students,
      isLoading,
      query,
      sortPreference,
      favoriteIds,
      filteredStudents,
      displayedStudents,
      totalStudents: students.length,
      favoritesCount: favoriteIds.length,
      setQuery,
      setSortPreference,
      toggleFavorite,
      addStudent,
    }),
    [
      students,
      isLoading,
      query,
      sortPreference,
      favoriteIds,
      filteredStudents,
      displayedStudents,
      addStudent,
      toggleFavorite,
    ],
  )

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
}

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StudentProvider