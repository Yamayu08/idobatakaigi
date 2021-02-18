import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  }
});

const Main = () => {
  const classes = useStyles();
  return <div className={classes.root}>Main</div>
}

export default Main;