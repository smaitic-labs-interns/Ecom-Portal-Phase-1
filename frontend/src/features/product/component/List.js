import { Grid, makeStyles, Paper, Typography, ListItemText } from '@material-ui/core';
import { Avatar } from '@mui/material';
import React from 'react'


const useStyle = makeStyles(theme => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
  },
  paper: {
    height: 220,
    width: '100%',
    background: "#ebebeb",
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatarImage:{
    width:500,
    height:500,
    borderRadius:500
  },
}));

export default function List({userAvatar, name}){
    const classes = useStyle();

    return (
      <Grid item className={classes.root} xs={12} sm={6} lg={4}>
        <Grid spacing={2}>
          <Grid key={1} item>
            <Paper className={classes.paper} elevation={2}>
              <Grid container justify="center">
                <Avatar
                  alt="User"
                  className={classes.avatarImage}
                  src={userAvatar}
                />
                <Typography variant="p">Name: {name}</Typography>
              </Grid>
              <ListItemText inset>
                <Typography>
                  <a href="/orderPage" variant="p">
                    Order
                  </a>
                </Typography>
              </ListItemText>
              <ListItemText inset>
                <Typography>
                  <a href="/cartPage" variant="p">
                    Add to cart
                  </a>
                </Typography>
              </ListItemText>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
} 