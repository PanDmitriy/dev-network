import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';
import { userAtom } from '@/entities/user/model/atoms';
import Link from 'next/link';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAtom(userAtom);
  const setUser = useSetAtom(userAtom);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Сохраняем пользователя в состояние
    setUser({ name: 'Developer', email });
  };

  return (
  <>
    {user ? (
      <Link href="/profile">Go to Profile</Link>
    ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%', maxWidth: 360 }}>
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Box>
  )}</>)
};

export default LoginPage;
