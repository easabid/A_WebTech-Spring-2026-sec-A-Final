import { useContext, useEffect, useState } from 'react'
import { StudentContext } from '../contexts/StudentContext.js'

const initialForm = {
  fullName: '',
  studentId: '',
  major: '',
  gpa: '',
  credits: '',
  courses: '',
}

function AddStudentForm() {
  const { students, addStudent } = useContext(StudentContext)
  const [formValues, setFormValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    if (!successMessage) {
      return undefined
    }

    const timerId = setTimeout(() => {
      setSuccessMessage('')
    }, 3000)

    return () => clearTimeout(timerId)
  }, [successMessage])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = 'Full Name is required.'
    }

    if (!formValues.studentId.trim()) {
      nextErrors.studentId = 'Student ID is required.'
    } else if (!/^\d+$/.test(formValues.studentId.trim())) {
      nextErrors.studentId = 'Student ID must be numeric.'
    } else if (students.some((student) => student.id === formValues.studentId.trim())) {
      nextErrors.studentId = 'Student ID must be unique.'
    }

    if (!formValues.major.trim()) {
      nextErrors.major = 'Major is required.'
    }

    if (!formValues.gpa.trim()) {
      nextErrors.gpa = 'GPA is required.'
    } else {
      const numericGpa = Number(formValues.gpa)
      if (Number.isNaN(numericGpa) || numericGpa < 0 || numericGpa > 4) {
        nextErrors.gpa = 'GPA must be between 0 and 4.0.'
      }
    }

    if (!formValues.credits.trim()) {
      nextErrors.credits = 'Credits is required.'
    } else {
      const numericCredits = Number(formValues.credits)
      if (Number.isNaN(numericCredits) || numericCredits < 0) {
        nextErrors.credits = 'Credits must be a non-negative number.'
      }
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const parsedCourses = formValues.courses
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)
      .map((courseName, index) => ({
        courseName,
        color: ['#666666', '#777777', '#888888'][index % 3],
      }))

    const firstName = formValues.fullName.trim().split(' ')[0].toLowerCase()

    addStudent({
      name: formValues.fullName.trim(),
      id: formValues.studentId.trim(),
      major: formValues.major.trim(),
      gpa: Number(formValues.gpa).toFixed(1),
      credits: Number(formValues.credits),
      avatar: `/avatars/${firstName}.jpg`,
      courses: parsedCourses,
    })

    setSuccessMessage('Student added successfully.')
    setFormValues(initialForm)
    setErrors({})
  }

  return (
    <section className="add-student-panel" aria-label="Add student form">
      <h2 className="add-student-panel__title">Add Student</h2>

      {successMessage ? (
        <p className="form-success" role="status" aria-live="polite">
          {successMessage}
        </p>
      ) : null}

      <form className="add-student-form" onSubmit={handleSubmit} noValidate>
        <label className="add-student-form__field">
          <span>Full Name</span>
          <input
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
          {errors.fullName ? <small className="field-error">{errors.fullName}</small> : null}
        </label>

        <label className="add-student-form__field">
          <span>Student ID</span>
          <input
            type="text"
            name="studentId"
            value={formValues.studentId}
            onChange={handleChange}
          />
          {errors.studentId ? <small className="field-error">{errors.studentId}</small> : null}
        </label>

        <label className="add-student-form__field">
          <span>Major</span>
          <input
            type="text"
            name="major"
            value={formValues.major}
            onChange={handleChange}
          />
          {errors.major ? <small className="field-error">{errors.major}</small> : null}
        </label>

        <label className="add-student-form__field">
          <span>GPA</span>
          <input
            type="text"
            name="gpa"
            value={formValues.gpa}
            onChange={handleChange}
          />
          {errors.gpa ? <small className="field-error">{errors.gpa}</small> : null}
        </label>

        <label className="add-student-form__field">
          <span>Credits</span>
          <input
            type="text"
            name="credits"
            value={formValues.credits}
            onChange={handleChange}
          />
          {errors.credits ? <small className="field-error">{errors.credits}</small> : null}
        </label>

        <label className="add-student-form__field add-student-form__field--wide">
          <span>Courses (comma-separated)</span>
          <input
            type="text"
            name="courses"
            value={formValues.courses}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="add-student-form__submit">
          Save Student
        </button>
      </form>
    </section>
  )
}

export default AddStudentForm
