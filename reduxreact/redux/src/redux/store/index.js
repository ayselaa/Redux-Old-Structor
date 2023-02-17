import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { nameReducer } from "../reducers";

const rootReducer = combineReducers({
   name: nameReducer
});
 
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

