import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral +updatedBad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }

  const Average = ({ good, bad, total }) => {
    if (total === 0) {
      return 0
    }

    return (good - bad) / total
  }

  const Positive = ({ good, total }) => {
    if (total === 0) {
      return '0%'
    }

    return `${((good / total) * 100)}%`
  }

  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text={"good"}/>
        <Button onClick={handleNeutral} text={"neutral"}/>
        <Button onClick={handleBad} text={"bad"}/>

        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average <Average good={good} bad={bad} total={total} /></p>
        <p>positive <Positive good={good} total={total} /></p>
    </div>
  )
}

export default App