import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../styles/home.css";
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import { qColors } from '../styles/colors.js'
import Nav from "./Nav";
function home() {

  const buttonStyle = {
    background: qColors.red,
    textDecoration: 'none',
    color: qColors.blue,
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <Nav />
    <div className="home-container" style={{background: qColors.blue}}>
      <Card className="card-container subject-catelog" style={{background: qColors.gold}}>
        <div className="subject-containers">
          <h1>Chemistry</h1>
          <Link to="/chemistry" style={{textDecoration: 'none'}}>
          <Button style={buttonStyle} variant="contained">Study Notes</Button>
          </Link>
        </div>
        <div className="subject-containers">
          <h1>Physics</h1>
          <Link to="/physics" style={{textDecoration: 'none'}}>
          <Button style={buttonStyle} variant="contained">Study Notes</Button>
          </Link>
        </div>
        <div className="subject-containers">
          <h1>Biology</h1>
          <Link to="/biology" style={{textDecoration: 'none'}}>
          <Button style={buttonStyle} variant="contained">Study Notes</Button>
          </Link>
        </div>
        <div className="subject-containers">
          <h1>History</h1>
          <Link to="/history" style={{textDecoration: 'none'}}>
          <Button style={buttonStyle} variant="contained">Study Notes</Button>
          </Link>
        </div>
        {/* <div className="subject-containers">
          <h1>Discussion Board</h1>
          <Link to="/discussion" style={{textDecoration: 'none'}}>
          <Button style={buttonStyle} variant="contained">Open Discussions</Button>
          </Link>
        </div> */}
      </Card>
    </div>
    </div>
  );
}


=======
function home() {
  return (
    <div className="home-container">
      <Card className="card-container subject-catelog">
        <div className="subject-containers">
          <h1>Chemistry</h1>
          <Button variant="contained">Study Notes</Button>
        </div>
        <div className="subject-containers">
          <h1>Physics</h1>
          <Button variant="contained">Study Notes</Button>
        </div>
        <div className="subject-containers">
          <h1>Biology</h1>
          <Button variant="contained">Study Notes</Button>
        </div>
        <div className="subject-containers">
          <h1>History</h1>
          <Button variant="contained">Study Notes</Button>
        </div>
        <div className="subject-containers">
          <h1>Discussion Board</h1>
          <Button variant="contained">View Discussion</Button>
        </div>
      </Card>
    </div>
  );
}

>>>>>>> 2c33890 (Made the pages for the notes)
export default home;
