// ! A function to recover initial state values from local storage for each corresponding state (based on the 'localStorageKey' function argument)
// * If there is nothing in local storage it will be used to set the 'initialState' to a 'fallback' value

const setInitialState = (loclaStorageKey, fallback) => {
  const data = localStorage.getItem(loclaStorageKey)
  return data
    ? JSON.parse(data)
    : fallback
}

export default setInitialState