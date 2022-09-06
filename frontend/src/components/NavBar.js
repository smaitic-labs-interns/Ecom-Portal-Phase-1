import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TypoGraphy from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/">Home</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/productPage">Product</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/aboutUsPage">About</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/signUpPage">Signup</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/loginPage">Signin</Link>
                </TypoGraphy>
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
