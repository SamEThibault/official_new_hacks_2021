import React from "react";
import tempPdf from "../assets/Note_Nov_6_2021.pdf";
import NoteUpload from "./NoteUpload";
import "../styles/topicNote.css";
import Nav from "../views/Nav"
function TopicNote() {
  const noteData = [
    { name: "Kevin", img: "Photo here pelase", message: "HI" },
    { name: "Logan", img: "PLEAS BRO", message: "ITS ME" },
    { name: "Hunter", img: "HIASFJLJK", message: "Please like Comment" },
  ];
  return (
    <div className="topic-note-container">
      <Nav/>
      <div className="container">
        {noteData.map((note, key) => (
          <div className="note-taker-container">
            <h1 className="note-taker-name">{`${note.name}'s Notes`}</h1>
            <div className="note-taker-info">
              <p>{note.message}</p>
              <embed className="note-pdf" src={tempPdf} type="application/pdf"></embed>
            </div>
            <p>Download</p>
          </div>
        ))}
        <NoteUpload />
      </div>
    </div>
  );
}

export default TopicNote;
