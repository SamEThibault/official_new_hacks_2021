import React, {useState} from 'react';
import '../App.css';
import {Link, useNavigate} from 'react-router-dom';
import { qColors } from '../styles/colors.js'
import { makeStyles} from '@material-ui/core';
import {Button} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'


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

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useNavigate()
    const classes = useStyles()

    async function handleLogout()
    {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }

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
            <Link className={classes.link} to='/' onClick={handleLogout}>
            <li>Logout</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
