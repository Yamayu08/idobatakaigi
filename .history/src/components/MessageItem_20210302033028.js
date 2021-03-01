import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar, ListItemText,
  Typography,
  classes,
} from '@material-ui/core';


const MessageItem = ({ name, text }) => {
  return
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary="Brunch this weekend?"
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
          {" — I'll be in your neighborhood doing errands this…"}
        </React.Fragment>
      }
    />
  </ListItem>
};

export default MessageItem;