import React from "react";
import "./NoteUpload";
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
            <h1 className="note-taker-name">{note.name}</h1>
            <div className="note-taker-info">
              <img className="note-taker-notes" src="" alt={note.img} />
              <p>{note.message}</p>
            </div>
            <p>Download</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicNote;
