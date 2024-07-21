// ! This is an example of a reducer function which receives a state value from the Component handling state update directly.

const userMetaDataReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        userMetaData : {
          ...state.userMetaData,
          isDarkMode: action.payload
        }
      }
    default:
      return state
  }
}

export default userMetaDataReducer
