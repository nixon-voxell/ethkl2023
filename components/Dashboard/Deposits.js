import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (
    <React.Fragment>
      <Title>My Balance</Title>
      <Typography component="p" variant="h4">
        {props.balance ? props.balance : 0} ETH
      </Typography>
    </React.Fragment>
  );
}