import React from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";
function Category(props) {
  return (
    <div className="category-container">
      <div className="container">
        <h1>{props.title}</h1>
        <div className="topics-container">
          <Link to="/topic" className="topic-container"></Link>
          <Link to="/topic" className="topic-container"></Link>
          <Link to="/topic" className="topic-container"></Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
