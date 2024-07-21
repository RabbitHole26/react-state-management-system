// ! This is an example of a reducer function which handles the state update and local storage directly
// * This allows for abstracting the state update logic away from components and encapsulates it in a single place creating a single source of truth for the FE

const counterReducer = (state, action) => {
  let updatedState = null

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      updatedState = {
        ...state,
        counter: {
          ...state.counter,
          // state update logic
          count: state.counter.count + 1
        }
      }
      // local storage management
      localStorage.setItem('count', updatedState.counter.count)
      return updatedState
    case 'DECREMENT_COUNTER':
      updatedState = {
        ...state,
        counter: {
          ...state.counter,
          // state update logic
          count: state.counter.count - 1
        }
      }
      // local storage management
      localStorage.setItem('count', updatedState.counter.count)
      return updatedState
    default:
      return state
  }
}

export default counterReducer
