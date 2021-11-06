import React, { useState, useRef } from "react";
import firebase from "../firebase/firebase";
import "../styles/noteUpload.css";
function NoteUpload(props) {
  const [fileUrl, setFileUrl] = useState(null);
  const [name, setName] = useState("");
  const notedb = firebase.firestore().collection("Notes");

  const submitNotes = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());

    notedb.doc().set(
      {
        name,
        // category: props.
      }
    )

  };

  const upload = () => {
    document.getElementById("selectedFile").click();
  };

  return (
    <div className="study-note-container">
      <h1>Study Notes</h1>
      <form action="" className="upload-container">
        <h1 className="upload-title">Submit Your Notes</h1>
        <div className="note-taker-info">
          <input type="text" placeholder="Note Taker's Name" className="note-taker-input" />
          <input type="file" id="selectedFile" style={{ display: "none" }} />
          <input
            type="button"
            onClick={() => {
              upload();
            }}
            className="upload-button"
            value="Add Notes"
          />
          <p></p>
        </div>
        <button
          onClick={() => {
            submitNotes();
          }}
          className="submit-notes"
        >
          Submit Notes
        </button>
      </form>
    </div>
  );
}

export default NoteUpload;
