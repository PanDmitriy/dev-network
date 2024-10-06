import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dev Network
        </Typography>
        <Button color="inherit" component={Link} href="/feed">
          Feed
        </Button>
        <Button color="inherit" component={Link} href="/profile">
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
