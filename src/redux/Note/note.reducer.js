import { toast } from "react-toastify";
import { noteData } from "../../firebaseConfig";
import {
  ADD_NOTE,
  CHANGE_EDIT_STATUS,
  DELETE_DATA,
  EDIT_DATA,
  GET_EDIT_DATA,
  ALERT_ON,
} from "./note.types";

const noteInitialState = {
  isEdit: true,
  editItem: {},
  alertContent: "",
  alertStyle: "",
};
const reducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      noteData.push(action.payload);
      return state;
    case CHANGE_EDIT_STATUS:
      return {
        ...state,
        isEdit: !state.isEdit,
      };
    case GET_EDIT_DATA:
      return {
        ...state,
        editItem: action.payload,
      };
    case EDIT_DATA:
      noteData.child(action.payload.id).update({
        title: action.payload.title,
        content: action.payload.content,
      });
      return {
        ...state,
        editItem: {},
      };
    case DELETE_DATA:
      noteData.child(action.payload).remove();
      return state;
    case ALERT_ON:
      const newState = {
        ...state,
        alertContent: action.payload,
        alertStyle: action.style,
      };
      toast.alertStyle(action.payload);
      return newState;
    default:
      return state;
  }
};

export default reducer;
