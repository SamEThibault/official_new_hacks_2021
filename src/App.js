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
import topicNote from "./components/TopicNote"
import Category from "./components/Category";
import firebase from "./firebase/firebase"
import NavBar from "./components/NavBar"
function App() {

  const notedb = firebase.firestore().collection("Notes");

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route exact path="*" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route exact path="signup" element={<Signup />} />
            <Route exact path="login" element={<Login />} />
            <Route exact path="home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="study" element={<PrivateRoute><NoteUpload /></PrivateRoute>} />
            <Route exact path="discussion" element={<PrivateRoute><Discussion /></PrivateRoute>} />
            {/* <Route path="*" element={<PageNotFound/>} /> */}
            <Route path="chemistry" element={<PrivateRoute><Category title="Chemistry" topics={["Organic", "Stoichiometry"]} /></PrivateRoute>} />
            <Route path="physics" element={<PrivateRoute><Category title="Physics" topics={["Thermodynamics", "Kinematics"]} /></PrivateRoute>} />
            <Route path="biology" element={<PrivateRoute><Category title="Biology" topics={["Human Body", "Anatomy"]} /></PrivateRoute>} />
            <Route path="history" element={<PrivateRoute><Category title="History" topics={["World War II", "Genocide"]} /></PrivateRoute>} />
            <Route path="math" element={<PrivateRoute><Category title="Math" topics={["Algebra", "Derivatives"]} /></PrivateRoute>} />
            <Route path="english" element={<PrivateRoute><Category title="English" topics={["Shakespeare", "Literary Devices"]} /></PrivateRoute>} />
            <Route path="chemistry/organic" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="chemistry/stoichiometry" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="physics/thermodynamics" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="physics/kinematics" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="biology/human%20body" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="biology/anatomy" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="history/world%20war%20ii" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="history/genocide" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="math/algebra" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="math/derivatives" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="english/shakespeare" element={<PrivateRoute><TopicNote /></PrivateRoute>} />
            <Route path="english/literary%20devices" element={<PrivateRoute><TopicNote /></PrivateRoute>} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>

    // </Container>
  );
}

export default App;
