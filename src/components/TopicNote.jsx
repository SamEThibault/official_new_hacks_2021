import React from "react";
<<<<<<< HEAD
import "./NoteUpload";
=======
import tempPdf from "../assets/Note_Nov_6_2021.pdf";
import NoteUpload from "./NoteUpload";
>>>>>>> kevin
import "../styles/topicNote.css";
function TopicNote() {
  const noteData = [
    { name: "Kevin", img: "Photo here pelase", message: "HI" },
    { name: "Logan", img: "PLEAS BRO", message: "ITS ME" },
    { name: "Hunter", img: "HIASFJLJK", message: "Please like Comment" },
  ];
  return (
    <div className="topic-note-container">
      <div className="container">
        {noteData.map((note, key) => (
          <div className="note-taker-container">
<<<<<<< HEAD
            <h1 className="note-taker-name">{note.name}</h1>
            <div className="note-taker-info">
              <img className="note-taker-notes" src="" alt={note.img} />
              <p>{note.message}</p>
=======
            <h1 className="note-taker-name">{`${note.name}'s Notes`}</h1>
            <div className="note-taker-info">
              <p>{note.message}</p>
              <embed className="note-pdf" src={tempPdf} type="application/pdf"></embed>
>>>>>>> kevin
            </div>
            <p>Download</p>
          </div>
        ))}
<<<<<<< HEAD
=======
        <NoteUpload />
>>>>>>> kevin
      </div>
    </div>
  );
}

export default TopicNote;
