import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers/reducer";
import thunk from "redux-thunk";

export const configureStore = () =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
