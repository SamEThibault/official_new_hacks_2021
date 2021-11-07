import React, { useState, useRef } from "react";
import firebase from "../firebase/firebase";
import "../styles/noteUpload.css";
import { useDispatch } from "react-redux";
import { setNewNote } from "../features/noteDataSlice";

function NoteUpload(props) {
  const dispatch = useDispatch();
  const name = useRef();
  const [file, setFile] = useState();
  const notedb = firebase.firestore().collection("Notes");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const upload = () => {
    document.getElementById("selectedFile").click();
  };

  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files);
    console.log(e.target.files[0]);
  };

  const submitNote = async () => {
    try {
      console.log(name.current.value);
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const fileURL = await fileRef.getDownloadURL();

      notedb.doc().set({
        name: name.current.value,
        file: fileURL,
        topic: props.topic,
      });
      dispatch(setNewNote(false));
    } catch {
      console.log("Error with uploading notes");
    }
  };

  return (
    <div className="study-note-container">
        <form onSubmit={onSubmit} className="upload-container">
          <h1 className="upload-title">Note Submission</h1>
          <div className="note-taker-info">
            <input type="text" placeholder="Note Taker's Name" className="note-taker-input" ref={name} />
            <input
              onChange={(e) => {
                onFileChange(e);
              }}
              type="file"
              id="selectedFile"
              style={{ display: "none" }}
            />
            <input
              type="button"
              onClick={() => {
                upload();
              }}
              className="upload-button"
              value="Add Notes"
            />
            {file ? (
              <div className="file-upload-container">
                <p className="file-name">{file.name}</p>
                <button
                  onClick={() => {
                    setFile({});
                  }}
                  className="delete-upload"
                >
                  X
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <button
            onClick={() => {
              submitNote();
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
