import React from 'react';
import StudentsList from '../../data/students';

export default () => {
  const studentsList = StudentsList.map((students) => {
    return (
      <li key={students.id}>
        {students.id}) {students.name}: {students.grade}
      </li>
    )
  })

  return (
    <div>
      <ul style={{listStyle:'none'}}>
        {studentsList}
      </ul>
    </div>
  )
}