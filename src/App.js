import React, { useEffect } from "react";
import './App.css';
import Home from "./views/Home";
import Discussion from "./views/Discussion";
import Signup from "./components/Signup"
import Nav from "./views/Nav";
import NoteUpload from "./components/NoteUpload";
import Category from "./components/Category";
import TopicNote from "./components/TopicNote";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from "./views/404-page";

function App() {
  useEffect(() => {
    
  }, [])
  return (
    <Router>
      <div className="App">
        
        {/* <Category title="physics" topics={["Kinematics","Harmonics", "Quantum Physics"]}/> */}
        {/* <TopicNote/> */}
        {/* <NoteUpload/> */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="study" element={<NoteUpload />} />
          <Route path="discussion" element={<Discussion />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
