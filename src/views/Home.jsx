import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { qColors } from "../styles/colors.js";
import Nav from "./Nav";
import { GoBeaker } from "react-icons/go";
import NavBar from "../components/NavBar";
import { BiAtom, BiDna } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { AiFillCalculator } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: qColors.red,
    textDecoration: "none",
    color: qColors.blue,
    fontWeight: "bold",
    "&:hover": {
      background: qColors.red,
      textDecoration: "none",
      color: qColors.red,
      fontWeight: "bold",
    },
    "&:active": {
      background: qColors.red,
      textDecoration: "none",
      color: qColors.gold,
      fontWeight: "bold",
    },
  },
});
function Home() {
  const classes = useStyles();
  return (
    <div className="App">
      <Nav />
      <div className="home-container" style={{ background: qColors.dBlue }}>
        <Card
          className="card-container subject-catelog"
          style={{ background: qColors.white, width: "1300px", height: "650px" }}
        >
          <div style={{ borderColor: qColors.gold }} className="subject-containers">
            <h1>Chemistry</h1>
            <h2>
              <GoBeaker />
            </h2>
            <Link to="/chemistry" style={{ textDecoration: "none" }}>
              <Button /*style={{background: qColors.red}}*/ className={classes.button} variant="contained">
                Study Notes
              </Button>
            </Link>
          </div>
          <div className="subject-containers">
            <h1>Physics</h1>
            <h2>
              <BiAtom />
            </h2>
            <Link to="/physics" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="contained">
                Study Notes
              </Button>
            </Link>
          </div>
          <div className="subject-containers">
            <h1>Biology</h1>
            <h2>
              <BiDna />
            </h2>
            <Link to="/biology" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="contained">
                Study Notes
              </Button>
            </Link>
          </div>
          <div className="subject-containers">
            <h1>History</h1>
            <h2>
              <ImBooks />
            </h2>
            <Link to="/history" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="contained">
                Study Notes
              </Button>
            </Link>
          </div>
          <div className="subject-containers">
            <h1>Math</h1>
            <h2>
              <AiFillCalculator />
            </h2>
            <Link to="/math" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="contained">
                Study Notes
              </Button>
            </Link>
          </div>
          <div className="subject-containers">
            <h1>English</h1>
            <h2>
              <HiPencilAlt />
            </h2>
            <Link to="/english" style={{ textDecoration: "none" }}>
              <Button className={classes.button} variant="contained">
                Study Notes
              </Button>
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
