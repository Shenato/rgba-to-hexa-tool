import { createStore, combineReducers, compose } from "redux";
import ExampleReducer from "./example/reducer";

const reducers = combineReducers({
  exampleState: ExampleReducer,
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers();
// other store enhancers if any
export const store = createStore(reducers, enhancer);
