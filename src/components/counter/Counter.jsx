import { useReducerContext } from "../../store/context/ReducerContext"

// ! This is an example of the component in which the state update logic and local storage management is handled in the reducer (counter-reducer.js)

const Counter = () => {
  const {state, dispatch} = useReducerContext()
  const {count} = state.counter

  const incrementCount = () => {
    // state update logic and local storage management is handled by 'counter-reducer.js'
    dispatch({type: 'INCREMENT_COUNTER'})
  }

  const decrementCount = () => {
    // state update logic and local storage management is handled by 'counter-reducer.js'
    dispatch({type: 'DECREMENT_COUNTER'})
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center border rounded-md p-5 m-5 max-w-fit bg-stone-700 text-white">
      
        {/* COUNTER */}
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
