import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import {
  addNote,
  alertOn,
  changeEditStatus,
  editData,
} from "../redux/Note/note.action";

function NoteForm(props) {
  const { editItem, editData, addNote, alertOn } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  const willMount = useRef(true);
  if (willMount.current) {
    setId(editItem.key);
    setTitle(editItem.title);
    setContent(editItem.content);
    willMount.current = false;
  }

  const handleAddButton = () => {
    var item = {};
    item.title = title;
    item.content = content;
    addNote(item);
    alertOn("Them thanh cong");
  };
  const handleEditButton = () => {
    var editItem = {};
    editItem.id = id;
    editItem.title = title;
    editItem.content = content;
    editData(editItem);
    alertOn("Sua thanh cong");
    //changeEditStatus();
  };
  return (
    <div className="col-4">
      <h3>SỬA NỘI DUNG NOTE</h3>
      <form>
        <div className="form-group">
          <label htmlFor="title">Tiêu đề note</label>
          <input
            defaultValue={editItem.title}
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="Tiêu đề"
            aria-describedby="helpIdNoteTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
          <small id="helpIdNoteTitle" className="text-muted">
            Điền tiêu đề vào đây
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="title">Nội dung note</label>
          <textarea
            defaultValue={editItem.content}
            type="text"
            name="noteContent"
            id="content"
            className="form-control"
            placeholder="Nội dung"
            aria-describedby="helpIdNoteContent"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <small id="helpIdNoteContent" className="text-muted">
            Điền nội dung vào đây
          </small>
        </div>
        <div className="button-group">
          <button
            type="reset"
            className="btn btn-block btn-primary"
            onClick={handleAddButton}
          >
            Thêm
          </button>
          <button
            type="reset"
            className="btn btn-block btn-info"
            onClick={handleEditButton}
          >
            Sửa
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.note.editItem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addNote: (item) => {
      dispatch(addNote(item));
    },
    editData: (item) => {
      dispatch(editData(item));
    },
    changeEditStatus: () => {
      dispatch(changeEditStatus());
    },
    alertOn: (content, style) => {
      dispatch(alertOn(content, style));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
