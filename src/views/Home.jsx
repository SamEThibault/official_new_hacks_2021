import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../styles/home.css";
import {Link} from 'react-router-dom';
import { qColors } from '../styles/colors.js'
import Nav from "./Nav";
import { makeStyles} from '@material-ui/core';
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
    button: {
        backgroundColor: qColors.red,
        textDecoration: 'none',
        color: qColors.blue,
        fontWeight: 'bold',
        '&:hover': {
            background: qColors.red,
            textDecoration: 'none',
            color: qColors.red,
                fontWeight: 'bold',
        },
        '&:active': {
            background: qColors.red,
            textDecoration: 'none',
            color: qColors.gold,
            fontWeight: 'bold',
        }
    },
})
function Home() {

  const classes = useStyles()
  return (
    <div className="App">
      <Nav />
    <div className="home-container" style={{background: qColors.blue}}>
      <Card className="card-container subject-catelog" style={{background: qColors.gold}}>
        <div className="subject-containers">
          <h1>Chemistry</h1>
          <Link to="/chemistry" style={{textDecoration: 'none'}}>
          <Button /*style={{background: qColors.red}}*/ className={classes.button} variant="contained">Study Notes</Button>
          </Link>   
        </div>
        <div className="subject-containers">
          <h1>Physics</h1>
          <Link to="/physics" style={{textDecoration: 'none'}}>
          <Button className={classes.button} variant="contained">Study Notes</Button>
          </Link>
        </div>
        <div className="subject-containers">
          <h1>Biology</h1>
          <Link to="/biology" style={{textDecoration: 'none'}}>
          <Button className={classes.button} variant="contained">Study Notes</Button>
          </Link>
        </div>
        <div className="subject-containers">
          <h1>History</h1>
          <Link to="/history" style={{textDecoration: 'none'}}>
          <Button className={classes.button} variant="contained">Study Notes</Button>
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


export default Home;
