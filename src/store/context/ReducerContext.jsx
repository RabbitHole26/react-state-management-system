import { useContext } from "react";
import { createContext } from "react";

// context for managing and sharing application-wide state and dispatch function
// this context allows components to access the 'state' and 'dispatch' function without prop drilling
// it provides a single source of truth for state management and dispatching actions throughout the application

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
// custom hook for accessing context values
// this hook provides a convenient way to access 'state' and 'dispatch' from within functional components
const useReducerContext = () => useContext(ReducerContext)

// eslint-disable-next-line react-refresh/only-export-components
export {ReducerContextProvider, useReducerContext}
