// import React, {useState} from 'react';
// import '../App.css';
// import {Link, useNavigate} from 'react-router-dom';
// import { qColors } from '../styles/colors.js'
// import { makeStyles} from '@material-ui/core';
// import {Button} from 'react-bootstrap'
// import {useAuth} from '../contexts/AuthContext'


//     const useStyles = makeStyles({
//         link: {
//             color: qColors.blue,
//             textDecoration: 'none',
//             fontWeight: 'bold',
//             fontSize: 20,
//             '&:hover': {
//                 color: 'white',
//                 textDecoration: 'none',
//                 fontWeight: 'bold',
//                 fontSize: 20,
//             },
//             '&:active': {
//                 color: qColors.red,
//                 textDecoration: 'none',
//                 fontWeight: 'bold',
//                 fontSize: 20,
//             }
//         },
//     })



// function Nav() {

//     const [error, setError] = useState("")
//     const {currentUser, logout} = useAuth()
//     const history = useNavigate()
//     const classes = useStyles()

//     async function handleLogout()
//     {
//         setError('')

//         try {
//             await logout()
//             history.push('/login')
//         } catch {
//             setError("Failed to log out")
//         }
//     }

//   return (
//     <nav style={{background: qColors.gold}}>
//         <h1 style={{color: qColors.red}}>HLSK NoteHack</h1>
//         <ul className="nav-links">
//             <Link className={classes.link} to='/home'>
//             <li>Home</li>
//             </Link>
//             <Link className={classes.link} to='/discussion'>
//             <li>Discussion</li>
//             </Link>
//             <Link className={classes.link} to='/' onClick={handleLogout}>
//             <li>Logout</li>
//             </Link>
//         </ul>
//     </nav>
//   );
// }

// export default Nav;
import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Typography, Button, Hidden, IconButton, withStyles} from "@material-ui/core";
import {useAuth} from '../contexts/AuthContext'
import { qColors } from '../styles/colors.js'


const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function Nav(props) {

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useNavigate()

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

  const {
    classes,
    selectedTab
  } = props;
  const menuItems = [
    {
      link: "/home",
      name: "Home",
    },
    {
      link: "/discussion",
      name: "Discussion",
    },
    {
      name: "Logout",
      
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} style={{background: qColors.white}}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              //className={classes.brandText}
              //font-family = Helvetica
              display="inline"
              style={{color: qColors.red,fontWeight: "bold"}}
            >
              NoteHack
            </Typography>
          </div>
          <div>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                    >
                      <Button //Every but logout
                        size="large"
                        width="100000px"
                        style={{color: qColors.blue, fontWeight:"bold", width:"300px"}}
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    style={{fontWeight:"bold",width:"300px"}}
                    onClick={handleLogout}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(memo(Nav));