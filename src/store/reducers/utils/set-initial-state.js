// function to retrieve the initial state values from local storage
// uses the 'localStorageKey' argument to fetch the corresponding value from local storage
// if no value is found in local storage, the function returns the provided 'fallback' value instead

const setInitialState = (localStorageKey, fallback) => {
  const data = localStorage.getItem(localStorageKey)
  return data
    ? JSON.parse(data)
    : fallback
}

export default setInitialState
