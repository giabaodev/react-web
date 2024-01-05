import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography>Logo</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
