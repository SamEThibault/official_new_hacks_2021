import React, { useEffect } from "react";
import './App.css';
import Home from "./views/Home";
import Discussion from "./views/Discussion";
import Nav from "./views/Nav";
import NoteUpload from "./components/NoteUpload";
import Category from "./components/Category";
import TopicNote from "./components/TopicNote";
import PageNotFound from "./views/404-page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import topicNote from "./components/TopicNote"
import Signup from './components/Signup'
import NavBar from "./components/NavBar"

function App() {
  useEffect(() => {
    
  }, [])
  return (
    <Container className = "d-flex align-itmes-center justify-content-center"
      style ={{minheight: "100vh"}}>
      <div className = "w-100" style={{maxWidth: '400px '}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
              <Route exact path="*" element={<PrivateRoute><Home /></PrivateRoute>}/>
              <Route exact path ="signup" element={<Signup />}/>
              <Route exact path ="login" element={<Login />}/>
              <Route exact path="home" element={<PrivateRoute><Home /></PrivateRoute>}/>
              <Route path="study" element={<PrivateRoute><NoteUpload /></PrivateRoute>}/>
              <Route path="discussion" element={<PrivateRoute><Discussion /></PrivateRoute>}/>
              {/* <Route path="*" element={<PageNotFound/>} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>

    // </Container>
  );
}

export default App;
