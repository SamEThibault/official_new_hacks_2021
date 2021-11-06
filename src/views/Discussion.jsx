import React from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";
import Nav from "../views/Nav";

function discussion() {
  return (
    <div className="DiscussionMain">
      <Nav />
      <div className="NewPostBtn">
        <h1>Discussion Board</h1>
        <Button
          variant="contained"
          style={{
            background: "#1f3a60",
            height: "90%",
            width: "90%",
          }}
        >
          Post Message
        </Button>
      </div>

      <div className="TextBox">
        <textarea
          style={{
            position: "fixed",
            top: 230,
            width: 600,
            height: 300,
            left: 10,
          }}
        >
          Type your message here...{" "}
        </textarea>
      </div>
    </div>
  );
}

export default discussion;
