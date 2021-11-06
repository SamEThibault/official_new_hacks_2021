<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";
import Nav from "../views/Nav"

function discussion() {
    return (
        <div className="DiscussionMain">
        <Nav/>
=======
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";

function DiscussionBoard() {
    
    return (
        <div className="DiscussionMain">
>>>>>>> 4381b7b (commiting to rebase forum branch)
            <div className="NewPostBtn">
                <h1>Discussion Board</h1>
                <Button
                    variant="contained"
<<<<<<< HEAD
                    style={{
=======
                    style=
                    {{
>>>>>>> 4381b7b (commiting to rebase forum branch)
                        background: "#1f3a60",
                        height: '90%',
                        width: '90%'
                    }}
                >Post Message</Button>
            </div>

            <div className="TextBox">
<<<<<<< HEAD
                <textarea 
=======
                <textarea
>>>>>>> 4381b7b (commiting to rebase forum branch)
                    style={{
                        position: "fixed",
                        top: 230,
                        width: 600,
                        height: 300,
                        left: 10
                    }}
                >Type your message here... </textarea>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default discussion;
=======
export default DiscussionBoard;
>>>>>>> 4381b7b (commiting to rebase forum branch)
=======
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles/discussion.css';

function Discussion() {

  const [text, setText] = useState(null)

  function getData(val) {
    setText(val.target.value)
  }

  return (
    <div className="App">
      <h1 className="Header">Discussion Board</h1>

      <div className="DiscussionInput">
        <TextField
          Onchange={getData}
          variant="outlined"
          color="secondary"
          id="outlined-multiline-flexible"
          label="Enter your message here:"
          multiline
          maxRows={6}
          style={{
            position: "fixed",
            top: 230,
            width: 500,
            height: 300,
            left: 10
          }}></TextField>

        <Button variant="contained"
          style={{
            background: "#edb220",
            height: 50,
            top: 300,
            left: 10,
            width: 500
          }} >Post Message</Button>
      </div>

      <div className="DiscussionOutput">
        <h2 className="PostsHeader">View Posts:</h2>
        <h5 className="PostText">{text}</h5>

      </div>
    </div>
  );
}

export default Discussion;
>>>>>>> 0e71cb0 (formatting, started the output UI for discussion forum)
