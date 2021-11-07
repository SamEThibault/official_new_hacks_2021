import React, { useState, useEffect } from "react";
import NoteUpload from "./NoteUpload";
import "../styles/topicNote.css";
import Nav from "../views/Nav";
import firebase from "../firebase/firebase";
import {useDispatch, useSelector} from "react-redux";
import {selectNewNote, setNewNote} from "../features/noteDataSlice";
import { BsTrash} from "react-icons/bs";
import {CgNotes} from "react-icons/cg"
function TopicNote(props) {
  const dispatch = useDispatch();
  const newNote = useSelector(selectNewNote);

  const notedb = firebase.firestore().collection("Notes");

  const deleteNote = async (id, file) => {
    try {
      await notedb.doc(id).delete();
      if (file !== null) {
        await firebase.storage().refFromURL(file).delete();
      }
    } catch {
      console.log("Error with deleting post");
    }
  };
  return (
    <div className="topic-note-container">
      <Nav />
      <div className="container">
        {props.notes.map((note, key) => (
          <div className="note-taker-container">
            <h1 className="note-taker-name">{`${note.name}'s Notes`}</h1>
            <div className="note-taker-info">
              <embed className="note-pdf" src={note.file} type="application/pdf"></embed>
            </div>
            <button
            className="delete-note"
              onClick={() => {
                deleteNote(note.id, note.file);
              }}
            >
              <BsTrash/>
            </button>
          </div>
        ))}

        {newNote ? (
          <>
            <NoteUpload topic={props.topic} />
            <div
              className="new-note-icon"
              onClick={() => {
                dispatch(setNewNote(!newNote));
              }}
            >
              <CgNotes/>
            </div>
          </>
        ) : (
          <div
            className="new-note-icon"
            onClick={() => {
              dispatch(setNewNote(!newNote));
            }}
          >
            <CgNotes/>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopicNote;
