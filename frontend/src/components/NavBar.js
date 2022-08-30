import React from "react";
import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core/";
import{Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Ecommerce Portal</Typography>
      </Toolbar>
      <List component="nav">
        <ListItem component="div">
          <ListItemText>
            <Typography color="inherit" variant="title">
              <Link to="/homePage"> Home </Link>
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography color="inherit" variant="title">
              <Link to="/productPage"> Product </Link>
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography color="inherit" variant="title">
              <Link to="/aboutUsPage"> About Us </Link>
            </Typography>
          </ListItemText>

          <ListItemText>
            <Typography color="inherit" variant="title">
              <Link to="/signup"> Signup </Link>
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </AppBar>
  );
}
