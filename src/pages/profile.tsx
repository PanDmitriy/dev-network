import { useAtom } from 'jotai';
import { userAtom } from '@/entities/user/model/atoms';
import { Box, Typography, Avatar } from '@mui/material';      import Link from 'next/link';


const ProfilePage = () => {
  const [user] = useAtom(userAtom);

  if (!user) {
    return <Typography variant="h5">User not logged in</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Avatar sx={{ width: 100, height: 100, mb: 2 }}>{user.name[0]}</Avatar>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body1">{user.email}</Typography>
      <Link href="/feed">Go to Feed</Link>

    </Box>
  );
};

export default ProfilePage;
