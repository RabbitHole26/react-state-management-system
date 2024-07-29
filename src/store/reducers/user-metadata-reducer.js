// reducer function for managing user metadata state updates
// the function receives a draft state (mutable copy) and action object
// the action object includes a payload that carries the new value to update the state.

const userMetaDataReducer = (draft, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      // example with useReducer (uncomment if using useReducer)
      // return {
      //   ...state,
      //   userMetaData : {
      //     ...state.userMetaData,
      //     isDarkMode: action.payload
      //   }
      // }

      // example with useImmerReducer
      // directly mutate the draft state using Immer
      draft.userMetaData.isDarkMode = action.payload
      return draft
    default:
      // return the draft state unchanged for unrecognized actions
      return draft
  }
}

export default userMetaDataReducer
