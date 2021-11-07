import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../styles/discussion.css';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavBar from "../components/NavBar"

function Discussion() {

  const [input, setInput] = useState('')
  const [print, setPrint] = useState(false)

  return (
    <div
      style={{
        marginTop: '100px'
      }} className="DiscussionStyle">
      <NavBar />
      <h1 className="Header">Discussion Board</h1>

      <div className="DiscussionInput">
        <TextField
          value={input}
          onInput={e => setInput(e.target.value)}
          style={{ width: '700px' }}
          className="TxtBox"
          variant="outlined"
          color="secondary"
          id="outlined-multiline-flexible"
          label="Enter your message here:"
          multiline
          maxRows={6}></TextField>

        <Button
          onClick={() => setPrint(true)}
          style={{
            background: '#edb220',
            marginTop: '0px',
            marginRight: '-40px',
            height: '55px'
          }}
          className="btn" variant="contained">Post Message</Button>
      </div>

      <h2
        style={{
          marginTop: '50px',
        }}
        className="PostsHeader" >View Posts:</h2>

      <Grid container>
        <Grid item md={12}>
          <Card>
            {print ?
              <h3>{input}</h3>
              : null}
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}

export default Discussion;
