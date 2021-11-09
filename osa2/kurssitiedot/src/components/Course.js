import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.courseName}
      </h1>
    </div>
  )
}
const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => 
        <Part key={part.id} name = {part.name} exercises = {part.exercises}  />
      )}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
)
}
const Total = ({parts}) => {
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <div>
      <b>
        total of {totalAmount} exercises
      </b>
    </div>
)
}

const Course = ({course}) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )
}

export default Course
  