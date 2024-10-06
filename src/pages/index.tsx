import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Dev Network
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a social network for developers to share ideas, projects, and connect with others.
      </Typography>
      <Button variant="contained" color="primary" href="/posts">
        View Posts
      </Button>
    </Container>
  );
};

export default Home;
