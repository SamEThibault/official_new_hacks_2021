import React, { useState, useRef } from "react";
import firebase from "../firebase/firebase";
import "../styles/noteUpload.css";
function NoteUpload(props) {
  const [fileUrl, setFileUrl] = useState(null);
  const uploadFile = useRef();
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const upload = () => {
    document.getElementById("selectedFile").click();
  };

  return (
    <div className="study-note-container">
      <h1>Study Notes</h1>
      <form action="" className="upload-container">
        <input
          type="file"
          id="selectedFile"
          ref={uploadFile}
          onChange={onFileChange}
          style={{ display: "none" }}
        />
        <input
          type="button"
          onClick={() => {
            upload();
          }}
          value="Upload Notes"
        />
      </form>
    </div>
  );
}

export default NoteUpload;
