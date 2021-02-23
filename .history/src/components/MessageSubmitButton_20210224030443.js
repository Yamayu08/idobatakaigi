import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { pushMessage } from '../firebase';

const MessageSubmitButton = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;