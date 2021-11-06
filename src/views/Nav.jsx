import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { qColors } from '../styles/colors.js'

function Nav() {

  const navStyle = {
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
    </nav>
  );
}

export default Nav;


