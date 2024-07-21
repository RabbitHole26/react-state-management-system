import { useReducer } from 'react'
import { ReducerContextProvider } from './store/context/ReducerContext'
import { initialState, reducer } from './store/reducers/root-reducer'
import Counter from './components/counter/Counter'
import './App.css'
import Layout from './components/layout/Layout'

function App() {
  // * useReducer hook is declared on the 'App.jsx' level
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    // * 'state' and 'dispatch' are passed to the context as props
    // * The context can then pass 'state' and 'dispatch' to deply nested components without the need for prop drilling
    <ReducerContextProvider state={state} dispatch={dispatch}>
      <Layout>
        <Counter />
      </Layout>
    </ReducerContextProvider>
  )
}

export default App
