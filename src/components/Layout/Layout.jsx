import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '../AppBar/AppBar.jsx';

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #c7d2fe 0%, #dbeafe 50%, #e2e8f0 100%)',
        color: 'primary.main',
      }}
    >
      <AppBar />
      <Outlet />
    </Box>
  );
};
export default Layout;
