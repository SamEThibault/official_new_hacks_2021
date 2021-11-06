import './App.css';
import Home from "./views/Home";
import Signup from "./components/Signup";
import Study_Note from "./components/Study_Note";
import Discussion from "./views/Discussion"
import Chemistry from "./subjects/Chemistry"
import Biology from "./subjects/Biology"
import History from "./subjects/History"
import Physics from "./subjects/Physics"
import PageNotFound from './views/404-page.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);

  // const db = firebase.firestore().collection("");
  // console.log("HI");

  console.log("ASFJSFLKJASFL:K");
  console.log("HEY ITS LOGAN");

  return (
    <Router>
      <div className="App">
      {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="home" element={<Home />}/>
          <Route exact path="study" element={<Study_Note/>}/>
          <Route exact path="discussion" element={<Discussion/>}/>
          <Route exact path="chemistry" element={<Chemistry/>}/>
          <Route exact path="biology" element={<Biology/>}/>
          <Route exact path="physics" element={<Physics/>}/>
          <Route exact path="history" element={<History/>}/>
          <Route exact path = "*" element={<PageNotFound/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
