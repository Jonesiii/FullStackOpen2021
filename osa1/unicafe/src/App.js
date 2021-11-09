import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / all
  const pos = (props.good / all * 100).toFixed(1) + '%'

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
  <table>
    <tbody>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad} />
      <StatisticLine text="all" value = {all} />
      <StatisticLine text="average" value = {avg} />
      <StatisticLine text="positive" value = {pos} />
    </tbody>
  </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  // buttons with individual states
  const [good, setGood] = useState(0)
  const handleSetGood = () => {
    setGood(good + 1)
  }

  const [neutral, setNeutral] = useState(0)
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }

  const [bad, setBad] = useState(0)
  const handleSetBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleSetGood} text='good' />
      <Button handleClick={handleSetNeutral} text='neutral' />
      <Button handleClick={handleSetBad} text='bad' />

      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
