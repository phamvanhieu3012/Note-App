import React, { useRef, useState } from "react";
import { noteData } from "../firebaseConfig";
import NoteItem from "./NoteItem";

function NoteList(props) {
  const [dataFirebase, setDataFirebase] = useState([]);
  const willMount = useRef(true);
  if (willMount.current) {
    console.log("First time load (it runs only once)");
    noteData.on("value", (snapshot) => {
      var data = [];
      snapshot.forEach((item) => {
        data.push({
          key: item.key,
          title: item.val().title,
          content: item.val().content,
        });
      });
      setDataFirebase(data);
    });
    willMount.current = false;
  } else {
    console.log("Repeated load");
  }
  return (
    <div className="col">
      <div id="noteList" role="tablist" aria-multiselectable="true">
        {dataFirebase.map((value, key) => {
          return (
            <NoteItem
              key={key}
              i={key}
              note={value}
              title={value.title}
              content={value.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NoteList;
