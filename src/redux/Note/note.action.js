import {
  ADD_NOTE,
  CHANGE_EDIT_STATUS,
  DELETE_DATA,
  EDIT_DATA,
  GET_EDIT_DATA,
  ALERT_ON,
} from "./note.types";

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload,
  };
};

export const changeEditStatus = () => {
  return {
    type: CHANGE_EDIT_STATUS,
  };
};

export const getEditData = (payload) => {
  return {
    type: GET_EDIT_DATA,
    payload,
  };
};

export const editData = (payload) => {
  return {
    type: EDIT_DATA,
    payload,
  };
};

export const deleteData = (payload) => {
  return {
    type: DELETE_DATA,
    payload,
  };
};

export const alertOn = (payload, style) => {
  return {
    type: ALERT_ON,
    payload,
    style,
  };
};
