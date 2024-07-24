import setInitialState from "../utils/set-initial-state";

// ! Clusters are objects aggregating related states and providing initial values
// * Clusters are spread into nested object inside 'initialState' object in 'rootReducer.js'
// * Cluster logic is abstracted into separate file for scalability purposes

const userMetaDataCluster = {
  isDarkMode: setInitialState('isDarkMode', false),
  // another state,
  // another state,
  // another state,
  // another state,
  // another state
}

export default userMetaDataCluster