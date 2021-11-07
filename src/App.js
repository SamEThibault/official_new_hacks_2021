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
import { setAllNotes, selectAllNotes } from "./features/noteDataSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {

  const notedb = firebase.firestore().collection("Notes");
  const dispatch = useDispatch();
  const allNotes = useSelector(selectAllNotes);
  async function getNoteData() {

    await notedb.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        items.push(appData);
      });
      dispatch(setAllNotes(items));
    });
  }


  const filterNotes = (topicName) => {
    return allNotes.filter((note) => {
      return note.topic == topicName;
    })
  }
  console.log(filterNotes("algebra"));

  useEffect(() => {
    getNoteData();
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
            <Route path="discussion" element={<PrivateRoute><Discussion /></PrivateRoute>} />
            {/* <Route path="*" element={<PageNotFound/>} /> */}
            <Route path="chemistry" element={<Category title="Chemistry" topics={["Organic", "Stoichiometry"]} />} />
            <Route path="physics" element={<Category title="Physics" topics={["Thermodynamics", "Kinematics"]} />} />
            <Route path="biology" element={<Category title="Biology" topics={["Human Body", "Anatomy"]} />} />
            <Route path="history" element={<Category title="History" topics={["World War II", "Genocide"]} />} />
            <Route path="math" element={<Category title="Math" topics={["Algebra", "Derivatives"]} />} />
            <Route path="english" element={<Category title="English" topics={["Shakespeare", "Literary Devices"]} />} />
            {/* Subject Topics */}
            <Route path="chemistry/organic" element={<TopicNote topic="organic" notes={filterNotes("organic")} />} />
            <Route path="chemistry/stoichiometry" element={<TopicNote topic="stoichiometry" notes={filterNotes("stoichiometry")} />} />
            <Route path="physics/thermodynamics" element={<TopicNote topic="thermodynamics" notes={filterNotes("thermodynamics")} />} />
            <Route path="physics/kinematics" element={<TopicNote topic="kinematics" notes={filterNotes("kinematics")} />} />
            <Route path="biology/human%20body" element={<TopicNote topic="human body" notes={filterNotes("human body")} />} />
            <Route path="biology/anatomy" element={<TopicNote topic="anatomy" notes={filterNotes("anatomy")} />}  />
            <Route path="history/world%20war%20ii" element={<TopicNote topic="world war" notes={filterNotes("world war")} />} />
            <Route path="history/genocide" element={<TopicNote topic="genocide" notes={filterNotes("genocide")} />} />
            <Route path="math/algebra" element={<TopicNote topic="algebra" notes={filterNotes("algebra")} />} />
            <Route path="math/derivatives" element={<TopicNote topic="derivatives" notes={filterNotes("derivatives")} />} />
            <Route path="english/shakespeare" element={<TopicNote topic="shakespeare" notes={filterNotes("shakesspeare")} />} />
            <Route path="english/literary%20devices" element={<TopicNote topic="literary devices" notes={filterNotes("literary devices")} />} />

          </Routes>
        </AuthProvider>
      </Router>
    </div>

    // </Container>
  );
}

export default App;
