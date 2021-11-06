import React from "react";
import Nav from "../views/Nav.jsx";
// import {storage} from "../firebase/firebase"

function Study_Note(props) {

  const onFileChange = (e) => {
    // const file = e.target.files[0];
    // const storageRef = storage.storage().ref();
    // const fileRef = storageRef.child(file.name);
    // fileRef.put(file).then(() => {
    //   console.log("Uploaded File", file.name);
    // });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="study-note-container">
      <Nav/>
      <h1>Study Notes</h1>
      <form action="">
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
      </form>
      <ul>
        <li>---</li>
      </ul>
    </div>
  );
}

export default Study_Note;
