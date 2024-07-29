import { useReducerContext } from "../../store/context/ReducerContext"

// this component handles theme toggling and updates local storage directly
// the state update logic for toggling the theme is handled by dispatching an action

const Navbar = () => {
  // access global state and dispatch function via context
  const {state, dispatch} = useReducerContext()
  // extract the current theme state
  const {isDarkMode} = state.userMetaData

  // function to toggle the theme
  const changeTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      // toggle the theme based on current state
      payload: !isDarkMode
    })
  }

  return (
    <nav className="bg-yellow-800 text-white p-5">

      {/* CHANGE THEME BUTTON */}
      <div className="flex gap-2">
        <p>Change theme</p>
        <input 
          onClick={changeTheme}
          type="checkbox" 
          className="toggle"
        />
      </div>
    </nav>
  )
}

export default Navbar
