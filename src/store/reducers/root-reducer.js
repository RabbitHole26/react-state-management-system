import reduceReducers from "reduce-reducers"
import counterReducer from "./counter-reducer"
import counterStateCluster from "./state-clusters/counter-state-cluster"
import userMetaDataCluster from "./state-clusters/user-metadata-state-cluster"
import userMetaDataReducer from "./user-metadata-reducer"

// 'rootReducer' combines reducer functions into a single reducer, and provides initial states
// the object containing states has nested state clusters which are defined in separate files
// this setup allows managing multiple states in a single structure
// each cluster is handled by a separate reducer function to encapsulate related states

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

// these values need to be imported into the module where the 'useReducer' or 'useImmerReducer' hook is used
// in this demo, the 'useReducer' is defined in 'App.jsx'
export {
  initialState, 
  reducer
}
