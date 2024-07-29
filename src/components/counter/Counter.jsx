import { useReducerContext } from "../../store/context/ReducerContext"

// this component demonstrates how to use the shared state and dispatch function
// the state update is handled by 'counter-reducer.js'
// actions are dispatched to update the counter value in the global state

const Counter = () => {
  const {state, dispatch} = useReducerContext()
  const {count} = state.counter

  // function to handle incrementing the count
  const incrementCount = () => {
    // dispatch an action to increment the count; state update logic is managed by 'counter-reducer.js'
    dispatch({type: 'INCREMENT_COUNTER'})
  }

  // function to handle decrementing the count
  const decrementCount = () => {
    // dispatch an action to decrement the count; state update logic is managed by 'counter-reducer.js'
    dispatch({type: 'DECREMENT_COUNTER'})
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center border rounded-md p-5 m-5 max-w-fit bg-stone-700 text-white">
      
        {/* DISPLAY COUNT */}
        <div className="p-2">
          Count: {count}
        </div>
      
        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={incrementCount}
            className="btn"
          >
            Increment count
          </button>
          <button
            onClick={decrementCount}
            className="btn"
          >
            Decrement count
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
