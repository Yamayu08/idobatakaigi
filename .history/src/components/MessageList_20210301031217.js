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

  messagesRef
    .orderByKey()
    .limitToLast(3)
    .on('value', (snapshot) => {
      const messages = snapshot.val();
      const entries = Object.entries(messages);
      entries.map((entry) => {
        return {key: entry[0], ...entry[1]};
      })
    });
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
