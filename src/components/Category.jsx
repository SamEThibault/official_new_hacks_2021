import React from "react";
import "../styles/category.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"
import Nav from "../views/Nav"

function Category(props) {
  return (
    <div className="category-container">
      <Nav/>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="topics-container">
          {props.topics.map((topic) => (
            <div className="topic-container">
              <Link to={topic.toLowerCase()}>
              <Button>{topic}</Button>
              </Link>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
