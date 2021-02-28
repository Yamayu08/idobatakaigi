import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase.js';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const classes = useStyles();
  return <div className={classes.root}>MessageList</div>
};

export default MessageList;
