/* rootReducer нужен для того, чтобы держать все reducers в одном месте*/
import { combineRedusers } from "redux";
import { persons } from "./persons";

const rootReducer = combineReducers({
  persons
});

export default rootReducer;