import { useContext } from "react";
import { createContext } from "react";

// ! A single context can be used by entier application to pass 'states' and 'dispatch' method from the core reducer declaration in 'App.jsx'

const ReducerContext = createContext()

const ReducerContextProvider = ({children, state, dispatch}) => {
  return (
    <ReducerContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ReducerContext.Provider>
  )
}

const useReducerContext = () => useContext(ReducerContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ReducerContextProvider, useReducerContext}
