import { useAtom } from 'jotai';
import { postsAtom } from '@/entities/post/model/atoms';
import { Box, Typography, Card, CardContent, Avatar, Stack, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

const PostList = () => {
  const [posts] = useAtom(postsAtom);

  return (
    <Box sx={{ mt: 4 }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{
            mb: 2,
            padding: 2,
            borderRadius: '16px',
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            },
            transition: '0.3s',
          }}
        >
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar>{post.author[0]}</Avatar>
              <Box>
                <Typography variant="h6">{post.author}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date}
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {post.content}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton>
                <FavoriteIcon color="primary" />
              </IconButton>
              <IconButton>
                <CommentIcon color="action" />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PostList;
