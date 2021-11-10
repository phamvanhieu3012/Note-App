import { noteData } from "./firebaseConfig";

import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { connect } from "react-redux";
import AlertInfo from "./components/AlertInfo";
import { ToastContainer } from "react-toastify";

function App(props) {
  // const deleteData = (id) => {
  //   var db2 = app.database().ref().child("note").child(id);
  //   db2
  //     .remove()
  //     .then(() => console.log("Xoa thanh cong"))
  //     .catch((error) => console.log("Loi: " + error.message));
  // };
  // noteData.on("value", (snapshot) => {
  //   console.log(snapshot.val());
  // });
  const { isEdit } = props;
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="row">
          <NoteList />
          {isEdit ? <NoteForm /> : null}
        </div>
      </div>
      {/* <AlertInfo /> */}
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.note.isEdit,
  };
};

export default connect(mapStateToProps)(App);
