import setInitialState from "../utils/set-initial-state"

// state clusters aggregate related state values and provide initial values
// clusters are merged into a nested object inside the 'initialState' object in 'rootReducer.js'
// clustering logic is abstracted into a separate file to improve scalability and maintainability

const counterStateCluster = {
  count: setInitialState('count', 0),
  // other state properties related to this cluster can be added here
}

export default counterStateCluster
