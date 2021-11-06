import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import { qColors } from '../styles/colors.js'
import { makeStyles} from '@material-ui/core';

    const useStyles = makeStyles({
        link: {
            color: qColors.blue,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: 20,
            '&:hover': {
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: 20,
            },
            '&:active': {
                color: qColors.red,
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: 20,
            }
        },
    })
function Nav() {

    const classes = useStyles()
  return (
    <nav style={{background: qColors.gold}}>
        <h1 style={{color: qColors.red}}>HLSK NoteHack</h1>
        <ul className="nav-links">
            <Link className={classes.link} to='/home'>
            <li>Home</li>
            </Link>
            <Link className={classes.link} to='/discussion'>
            <li>Discussion</li>
            </Link>
            <Link className={classes.link} to='/'>
            <li>Logout</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
