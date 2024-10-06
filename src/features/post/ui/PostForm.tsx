import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { postsAtom, Post } from '@/entities/post/model/atoms';
import { Box, Button, TextField, Paper } from '@mui/material';

const PostForm = () => {
  const [content, setContent] = useState('');
  const setPosts = useSetAtom(postsAtom);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (content.trim() === '') return;

    const newPost: Post = {
      id: Date.now(),
      author: 'Developer', // заменить на реального пользователя позже
      content,
      date: new Date().toLocaleDateString(),
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setContent('');
  };

  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: 600,
        padding: 3,
        borderRadius: '16px',
        boxShadow: 3,
        mt: 4,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ height: 50 }}>
          Post
        </Button>
      </Box>
    </Paper>
  );
};

export default PostForm;
