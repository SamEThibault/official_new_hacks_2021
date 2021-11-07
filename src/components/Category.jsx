import React from "react";
import "../styles/category.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import Nav from "../views/Nav"
import { qColors } from '../styles/colors.js'
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    "&:inactive": {
    backgroundColor: qColors.red,
    textDecoration: "none",
    color: 'white',
    fontWeight: "bold",
    },
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

function Category(props) {
  const classes = useStyles()
  return (
    <div className="category-container">
      <Nav/>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="topics-container">
          {props.topics.map((topic) => (
            <div className="topic-container">
              <Link style={{textDecoration: 'none'}} to={topic.toLowerCase()}>
              <Button style={{fontWeight: 'bold'}} className={classes.button}>{topic}</Button>
              </Link>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
