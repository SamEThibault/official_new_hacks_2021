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

function NavBar(props) {

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
      <AppBar position="fixed" className={classes.appBar} style={{background: qColors.blue}}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography
              variant="h4"
              display="inline"
              style={{color: qColors.white,fontWeight: "none",fontFamily: 'Nunito'}}
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
                        style={{color: qColors.white, fontWeight:"none", width:"300px"}}
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

export default withStyles(styles, { withTheme: true })(memo(NavBar));