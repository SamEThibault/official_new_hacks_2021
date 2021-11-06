import React from "react";
import "../styles/category.css";
function Category(props) {
  return (
    <div className="category-container">
      <div className="container">
        <h1>{props.title}</h1>
        <div className="topics-container">
          {props.topics.map((topic) => (
            <div className="topic-container">{topic}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
