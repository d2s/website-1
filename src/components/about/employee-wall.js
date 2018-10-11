import React from 'react'
import EmployeeCard from './employee-card'
import Wrapper from '../wrapper'
import employees from './employees'

export default () => (
  <Wrapper nowrap>
    <div className="c-employee-wall">
      {employees.map(e => (
        <EmployeeCard
          key={e.last_name}
          image={e.image}
          name={`${e.name} ${e.last_name}`}
          position={e.title}
        />
      ))}
    </div>
  </Wrapper>
)
