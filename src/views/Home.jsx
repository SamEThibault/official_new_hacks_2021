import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import "../styles/home.css";
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
      </Card>
    </div>
  );
}

export default home;
