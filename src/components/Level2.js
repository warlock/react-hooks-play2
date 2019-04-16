import React, { useContext } from 'react'
import { NumberContext } from '../context/context'

function Level1() {
  const { state, dispatch } = useContext(NumberContext)
  return (
    <div>
      <p>value2: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: 'increment' })
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement' })
        }}
      >
        decrement
      </button>
    </div>
  )
}

export default Level1
