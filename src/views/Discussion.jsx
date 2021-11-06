import React from "react";
import Button from "@mui/material/Button";
import "../styles/discussion.css";
import Nav from './Nav.jsx'

function discussion() {
    return (
        <div className="NewPostBtn">
            <Nav/>
            <h1>Discussion Board</h1>
            <Button
                size="large"
                variant="contained"
                style={{background: "darkred"}}
                >Post</Button>
        </div>
    );
}

export default discussion;