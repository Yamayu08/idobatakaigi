import { IconButton } from '@material-ui/core';
import React from 'react';

import { pushMessage } from '../firebase';

const MessageSubmitButton = () => {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;