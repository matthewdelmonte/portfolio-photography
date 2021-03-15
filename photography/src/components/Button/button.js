import React from 'react';
import { Button } from '@material-ui/core';

function handleClick() {
  return alert('clicked');
}

function MyButton() {
  return <Button variant='contained' color='primary' onClick={handleClick}>Click Me!</Button>;
}

export default MyButton;
