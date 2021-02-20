import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({ text });

  return <TextField
    fullWidth={true}
    onChange={(e) => {
      setText(e.target.value);
    }}
    onKeyDown={(e) => {
      if (isComposed) return;
      if (e.key === 'Enter') {
        console.log('push message to firebase')
        e.preventDefault();
      }
    }}
    onCompositionStart={() => setIsComposed(true)}
    onCompositionEnd={() => setIsComposed(false)}
  />;
}

export default MessageField;