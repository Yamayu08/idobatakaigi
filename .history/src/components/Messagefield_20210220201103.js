import React from 'react';
import { TextField } from '@material-ui/core';

const MessageField = ({ name, setText, text }) => {
  return <TextField 
  fullWidth={true} 
  onChange={(e) => {
    setText(e.target.value);
  }} />;
}

export default MessageField;