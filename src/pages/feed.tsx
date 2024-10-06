import PostList from '@/features/post/ui/PostList';
import PostForm from '@/features/post/ui/PostForm';
import { Box, Typography } from '@mui/material';

const FeedPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Developer Feed
      </Typography>
      <PostForm />
      <PostList />
    </Box>
  );
};

export default FeedPage;
