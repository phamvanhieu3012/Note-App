import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});
export default store;
