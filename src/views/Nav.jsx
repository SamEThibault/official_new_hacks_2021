import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {

  const navStyle = {
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
    </nav>
  );
}

export default Nav;
