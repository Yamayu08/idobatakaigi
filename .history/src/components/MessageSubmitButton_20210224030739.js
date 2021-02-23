import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';

const MessageSubmitButton = () => {
  return (
    <IconButton aria-label="send">
      <SendIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;