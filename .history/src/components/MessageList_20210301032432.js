import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase.js';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

const MessageList = () => {
  const [messages, setMessages] = useState();
  const classes = useStyles();

  useEffect(() => {
    messagesRef
      .orderByKey()
      .limitToLast(3)
      .on('value', (snapshot) => {
        const messages = snapshot.val();
        const entries = Object.entries(messages);
        const newMessages = entries.map((entry) => {
          const [key, nameAndText] = entry;
          return { key, ...nameAndText };
        });
        setMessages(newMessages);
      });
  }, []);
  return <div className={classes.root}>MessageList</div>;
};

export default MessageList;
