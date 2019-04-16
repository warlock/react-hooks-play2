import React, { useReducer } from 'react'
import styles from './App.css'
import Level1 from './components/Level1'
import { NumberContext } from './context/context'

let reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    default:
      return
  }
}

const initialState = { count: 100 }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className={styles.App}>
      <header className={styles.Appheader}>
        <p>
          <NumberContext.Provider value={{ state, dispatch }}>
            <Level1 />
          </NumberContext.Provider>
        </p>
        <a className={styles.Applink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
      </header>
    </div>
  )
}

export default App
