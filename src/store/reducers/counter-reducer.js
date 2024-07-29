// reducer function for managing counter state updates
// this function handles state updates directly and encapsulates the logic for updating the count
// it demonstrates how to use Immer for immutability management and direct state mutation


const counterReducer = (draft, action) => {
  // ! use case with useReducer
  // let updatedState = null

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      // example with useReducer (uncomment if using useReducer)
      // updatedState = {
      //   ...state,
      //   counter: {
      //     ...state.counter,
      //     // state update logic
      //     count: state.counter.count++
      //   }
      // }
      // return updatedState

      // example with useImmerReducer
      // directly mutate the draft state using Immer
      draft.counter.count++
      return draft
    case 'DECREMENT_COUNTER':
      // example with useReducer (uncomment if using useReducer)
      // updatedState = {
      //   ...state,
      //   counter: {
      //     ...state.counter,
      //     // state update logic
      //     count: state.counter.count--
      //   }
      // }
      // return updatedState

      // example with useImmerReducer
      // directly mutate the draft state using Immer
      draft.counter.count--
      return draft
    default:
      // return the draft state unchanged for unrecognized actions
      return draft
  }
}

export default counterReducer
