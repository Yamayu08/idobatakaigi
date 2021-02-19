import crypto from 'crypto'

export const gravatarPath = () => {
  const md5 = crypto.createHash('md5');
  const digest md5.update('gipcompany@gmail.com', 'binary').digest('hex');

  return `https://www.gravatar.com/avatar/${digest}/?=retro`;
};