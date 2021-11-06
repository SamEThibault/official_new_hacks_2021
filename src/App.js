import React, { useEffect } from "react";
import './App.css';
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup"
import { Container} from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login'


function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);

  // const db = firebase.firestore().collection("");
  // console.log("HI");

  console.log("ASFJSFLKJASFL:K");

  return (
    <Container className = "d-flex align-itmes-center
    justify-content-center"
      style ={{minheight: "100vh"}}>
      <div className = "w-100" style={{maxWidth: '400px '}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path ="signup" element={<Signup />}/>
              <Route exact path ="login" element={<Login />}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>

    </Container>
    
  );
}

export default App;
