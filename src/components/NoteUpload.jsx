import React, { useState } from "react";
import firebase from "../firebase/firebase";
import "../styles/noteUpload.css";
function NoteUpload(props) {
  const [fileUrl, setFileUrl] = useState(null);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="study-note-container">
      <h1>Study Notes</h1>
      <form action="" className="upload-container">
        <input type="file" onChange={onFileChange} />
      </form>
    </div>
  );
}

export default NoteUpload;
