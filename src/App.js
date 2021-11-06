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

function App() {
  useEffect(() => {
    
  }, [])
  return (
    // <Container className = "d-flex align-itmes-center
    // justify-content-center"
    //   style ={{minheight: "100vh"}}>
    //   <div className = "w-100" style={{maxWidth: '400px '}}>
    <div className="App">
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
              <Route path="chemistry" element={<Category title="Chemistry" topics={["Organic", "Stoichiometry"]}/>}/>
              <Route path="physics" element={<Category title="Physics" topics={["Thermodynamics", "Kinematics"]}/>}/>
              <Route path="biology" element={<Category title="Biology" topics={["Human Body", "Frogs"]}/>}/>
              <Route path="history" element={<Category title="History" topics={["World War II", "Genocide"]}/>}/>
              <Route path="organic" element={<TopicNote/>}/>
              <Route path="stoichiometry" element={<TopicNote/>}/>
              <Route path="thermodynamics" element={<TopicNote/>}/>
              <Route path="kinematics" element={<TopicNote/>}/>
              <Route path="humanbody" element={<TopicNote/>}/>
              <Route path="frogs" element={<TopicNote/>}/>
              <Route path="worldwarii" element={<TopicNote/>}/>
              <Route path="genocide" element={<TopicNote/>}/>

            </Routes>
          </AuthProvider>
        </Router>
      </div>

    // </Container>
  );
}

export default App;