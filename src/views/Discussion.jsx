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
