import { combineReducers } from "redux";
import noteReducer from "./Note/note.reducer";

const rootReducer = combineReducers({
  note: noteReducer,
});

export default rootReducer;
