// importing the useReducer hook from React (uncomment if using useReducer)
// import { useReducer } from 'react'

// importing the useImmerReducer hook from the use-immer library
import { useImmerReducer } from 'use-immer'

import { ReducerContextProvider } from './store/context/ReducerContext'
import { initialState, reducer } from './store/reducers/root-reducer'
import Counter from './components/counter/Counter'
import Layout from './components/layout/Layout'
import './App.css'

function App() {
  // uncomment below to use the basic useReducer hook instead of useImmerReducer
  // const [state, dispatch] = useReducer(reducer, initialState)

  // initializing the state and dispatch function using useImmerReducer
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    // providing state and dispatch through context to avoid prop drilling
    <ReducerContextProvider
      state={state}
      dispatch={dispatch}
    >
      <Layout>
        <Counter />
      </Layout>
    </ReducerContextProvider>
  )
}

export default App
