import { createContext } from 'react'

export const StudentContext = createContext({
  students: [],
  isLoading: true,
  query: '',
  sortPreference: 'default',
  favoriteIds: [],
  filteredStudents: [],
  displayedStudents: [],
  totalStudents: 0,
  favoritesCount: 0,
  setQuery: () => {},
  setSortPreference: () => {},
  toggleFavorite: () => {},
})