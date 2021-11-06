import React from 'react';
import '../App.css';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import { qColors } from '../styles/colors.js'
=======
import { Link } from 'react-router-dom';

>>>>>>> 2c33890 (Made the pages for the notes)

function Nav() {

  const navStyle = {
<<<<<<< HEAD
    color: qColors.blue,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 20,
  }
  return (
    <nav style={{background: qColors.gold}}>
        <h1 style={{color: qColors.red}}>HLSK NoteHack</h1>
        <ul className="nav-links">
            <Link style={navStyle} to='/home'>
            <li>Home</li>
            </Link>
            <Link style={navStyle} to='/discussion'>
            <li>Discussion</li>
            </Link>
            <Link style={navStyle} to='/'>
            <li>Logout</li>
            </Link>
        </ul>
=======
    color: 'white'
  }
  return (
    <nav>
      <h3>Website</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>Login</li>
        </Link>
        <Link style={navStyle} to='/home'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/study'>
          <li>Study</li>
        </Link>
        <Link style={navStyle} to='/discussion'>
          <li>Discussion</li>
        </Link>
      </ul>
>>>>>>> 2c33890 (Made the pages for the notes)
    </nav>
  );
}

export default Nav;
<<<<<<< HEAD


=======
>>>>>>> 2c33890 (Made the pages for the notes)
