import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/Reducer";

//Actions
// const increment = () => {
//   return {
//     type: "INC",
//     counter: 1,
//   };
// };

// const decrement = () => {
//   return {
//     type: "DEC",
//     counter: 2,
//   };
// };

// // reducer
// const hassan = (state = 0, action) => {
//   switch (action.type) {
//     case "INC":
//       return state + action.counter;
//     case "DEC":
//       return state - action.counter;
//     default:
//       return state;
//   }
// };

// const store = createStore(hassan);
// store.subscribe(() => console.log(store.getState()));
//Distpatchers
// store.dispatch(increment());
// store.dispatch(decrement());

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
