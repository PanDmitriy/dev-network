import React from 'react';
import { Container, Typography } from '@mui/material';

const PostsPage: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Posts
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here you will see the list of posts in the future.
      </Typography>
      {/* Здесь можно будет позже добавить динамическое отображение постов */}
    </Container>
  );
};

export default PostsPage;
