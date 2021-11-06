import React, { useEffect } from "react";
import './App.css';
import Home from "./views/Home";
import Discussion from "./views/Discussion";
import Nav from "./views/Nav";
import NoteUpload from "./components/NoteUpload";
import TopicNote from "./components/TopicNote";
import PageNotFound from "./views/404-page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup"
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Category from "./components/Category";
import firebase from "./firebase/firebase"
function App() {

  const notedb = firebase.firestore().collection("Notes");
  
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      {/* <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route exact path="*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="study" element={<NoteUpload />} />
            <Route path="discussion" element={<Discussion />} /> */}
            {/* <Route path="*" element={<PageNotFound/>} /> */}
          {/* </Routes>

        </AuthProvider>
      </Router> */}
      <TopicNote/>
    </div>

    // </Container>
  );
}

export default App;