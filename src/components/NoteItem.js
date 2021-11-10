import React from "react";
import { connect } from "react-redux";
import {
  alertOn,
  changeEditStatus,
  deleteData,
  getEditData,
} from "../redux/Note/note.action";

function NoteItem(props) {
  const { i, title, content, note, getEditData, deleteData } = props;
  const handleEditButton = () => {
    //ham lay nd truyen trong store, de store update dl
    //action 2
    //changeEditStatus();
    getEditData(note);
  };
  const deleteItem = () => {
    deleteData(note.key);
    props.alertOn("Xoa thanh cong!", "info");
  };
  return (
    <div className="card">
      <div className="card-header" role="tab" id="section1HeaderId">
        <h5 className="mb-0">
          <a
            data-toggle="collapse"
            data-parent="#noteList"
            href={`#note${i}`}
            aria-expanded="true"
            aria-controls="note1"
          >
            {title}
          </a>
        </h5>
        <div className="btn-group float-right">
          <button
            className="btn btn-outline-info"
            onClick={() => handleEditButton()}
          >
            Sửa
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => deleteItem()}
          >
            Xóa
          </button>
        </div>
      </div>
      <div
        id={`note${i}`}
        className="collapse in"
        role="tabpanel"
        aria-labelledby="section1HeaderId"
      >
        <div className="card-body">{content}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch(changeEditStatus());
    },
    getEditData: (editItem) => {
      dispatch(getEditData(editItem));
    },
    deleteData: (itemId) => {
      dispatch(deleteData(itemId));
    },
    alertOn: (content, style) => {
      dispatch(alertOn(content, style));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
