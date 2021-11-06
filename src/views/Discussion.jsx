<<<<<<< HEAD
import React from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";
import Nav from "../views/Nav"

function discussion() {
    return (
        <div className="DiscussionMain">
        <Nav/>
=======
import React, { useState } from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";

function DiscussionBoard() {
    
    return (
        <div className="DiscussionMain">
>>>>>>> 4381b7b (commiting to rebase forum branch)
            <div className="NewPostBtn">
                <h1>Discussion Board</h1>
                <Button
                    variant="contained"
<<<<<<< HEAD
                    style={{
=======
                    style=
                    {{
>>>>>>> 4381b7b (commiting to rebase forum branch)
                        background: "#1f3a60",
                        height: '90%',
                        width: '90%'
                    }}
                >Post Message</Button>
            </div>

            <div className="TextBox">
<<<<<<< HEAD
                <textarea 
=======
                <textarea
>>>>>>> 4381b7b (commiting to rebase forum branch)
                    style={{
                        position: "fixed",
                        top: 230,
                        width: 600,
                        height: 300,
                        left: 10
                    }}
                >Type your message here... </textarea>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default discussion;
=======
export default DiscussionBoard;
>>>>>>> 4381b7b (commiting to rebase forum branch)
