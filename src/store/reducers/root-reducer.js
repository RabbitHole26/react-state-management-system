import reduceReducers from "reduce-reducers"
import counterReducer from "./counter-reducer"
import counterStateCluster from "./state-clusters/counter-state-cluster"
import userMetaDataCluster from "./state-clusters/user-metadata-state-cluster"
import userMetaDataReducer from "./user-metadata-reducer"

// ! 'rootReducer' combines reducer functions into a single reducer, and provides initial states
// * The object containing states has nested state clusters which are defined in separate files
// * This setup allows to manage multiple states in a single cluster
// * Each cluster is handled by a separate reducer function to encapsulate related states

const initialState = {
  counter : {
    ...counterStateCluster
  },
  userMetaData : {
    ...userMetaDataCluster
  }
}

const reducer = reduceReducers(
  initialState,
  counterReducer,
  userMetaDataReducer
)

// * These values needs to be imported into the module in which the 'useReducer' hook is used
// * In this demo, the 'useReducer' is defined in 'App.jsx'
export {initialState, reducer}
