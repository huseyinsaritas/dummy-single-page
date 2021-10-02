import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import rootReducer from "./reducer";
import { UserState } from "./model/user";
import { Action } from "./model/Action";
import { composeWithDevTools } from "redux-devtools-extension";

const createAppStore = () => {
  let storeEnhancer = applyMiddleware(thunk as ThunkMiddleware<UserState, Action>);
  const composeEnhancers = composeWithDevTools(storeEnhancer);

  const store = createStore(rootReducer, composeEnhancers);

  return store;
};

export default createAppStore;
