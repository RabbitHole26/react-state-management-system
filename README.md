# React State Management System

## Project overview
This project demonstrates a particular way of structuring the *state management system* in a React application using context and reducers.

The primary functionality includes updating state.

## Components
#### [Counter](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/components/counter/Counter.jsx)

The **Counter** component demonstrates the usage of a centralized state managed by a reducer. It allows incrementing and decrementing a count value.
  * Uses the **useReducerContext** to access state and dispatch.
  * State update logic is handled by the **counter-reducer.js**.

#### [Navbar](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/components/navbar/Navbar.jsx)

The **Navbar** component demonstrates how to pass a value to update state through `action.payload` in the action object. It manages a theme toggle functionality.
* Uses the **useReducerContext** to access state and dispatch.
* State update is partially handled within the component.
* Local storage management is also handled directly in the component.

## Reducers and Context

#### [Root Reducer](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/reducers/root-reducer.js)

The **rootReducer** combines multiple reducer functions into a single reducer and provides initial states.

States and their initial values are aggregated into a single object and divided into clusters. Clusters are objects nested within the main object which group states into logical units. There are two clusters in this project:
* [Counter cluster](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/reducers/state-clusters/counter-state-cluster.js)
* [User metadata cluster](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/reducers/state-clusters/user-metadata-state-cluster.js)

#### [Counter Reducer](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/reducers/counter-reducer.js)

The **Counter Reducer** handles state updates for the counter state.

> This reducer manages state updates by completely abstracting the update logic away from components.

#### [User MetaData Reducer](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/reducers/user-metadata-reducer.js)

The **User MetaData Reducer** handles state updates for user metadata, such as toggling the theme.

> The state updates are managed partially at the component level by passing the new value through `action.payload` to the reducer. The reducer does not handle local storage directly.

#### [Reducer Context](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/store/context/ReducerContext.jsx)

The **Reducer Context** provides a centralized state and dispatch function for the entire application.

## Usage

In your main application file (e.g., [App.jsx](https://github.com/RabbitHole26/react-state-management-system/blob/main/src/App.jsx)), set up the `useImmerReducer` hook with the rootReducer and initialState, and wrap your application with the `ReducerContextProvider`.

## Caveats

When managing state that frequently changes and is shared across components, it's beneficial to consider using custom hooks to encapsulate and isolate specific chunks of state. 

By doing so, you can prevent unnecessary re-renders of components that share the same context but don't depend on every piece of state within that context. 

Custom hooks allow you to selectively pass only the relevant state and update functions to components, optimizing performance by minimizing re-renders and keeping the component tree lean and efficient.

As of now, this project does not include such hooks.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/RabbitHole26/react-state-management-system/blob/main/LICENSE) file for details.
