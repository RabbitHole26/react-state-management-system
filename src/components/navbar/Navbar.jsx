import { useEffect } from "react"
import { useReducerContext } from "../../store/context/ReducerContext"

// ! This is an example of the component in which the state update logic and local storage management is handled locally

const Navbar = () => {
  const {state, dispatch} = useReducerContext()
  const {isDarkMode} = state.userMetaData
  const changeTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      // state update logic handled directly in the component
      payload: !isDarkMode
    })
  }

  // local storage handled directly in the component
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode)
  }, [isDarkMode])

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
