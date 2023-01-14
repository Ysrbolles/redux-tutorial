import Logged from "./Logged";
import counter from "./counter";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counter,
  isLogged: Logged,
});

export default allReducers;
