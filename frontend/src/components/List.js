import { Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles(theme => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
  },
  paper: {
    height: 220,
    width: 340,
    background: "#ebebeb",
  },
  avatarImage:{
    width:200,
    height:200,
    borderRadius:100
  }
}));

export default function List(){
    const classes = useStyle();

    return (
      <Grid container spacing={2}>
        <Grid item className={classes.root} xs={12}>
        <Grid spacing ={2}>
            <Grid key ={1} item>
                <Paper className = {classes.paper} elevation ={2}>

                </Paper>
            </Grid>
        </Grid>
        </Grid>
      </Grid>
    );
} 