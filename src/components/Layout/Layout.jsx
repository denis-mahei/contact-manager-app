import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '../AppBar/AppBar.jsx';

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%,#764ba2 100%)',
      }}
    >
      <AppBar />

      <Outlet />
    </Box>
  );
};
export default Layout;
