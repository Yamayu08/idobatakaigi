import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text }) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Ali Connors
              </Typography>
              name: {name},text: {text}
          </React.Fragment>
        }
      />
    </ListItem>
  )
};

export default MessageItem;