import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/theme.css'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './contexts/ThemeProvider.jsx'
import StudentProvider from './contexts/StudentProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ThemeProvider>
  </StrictMode>,
)
