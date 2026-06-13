import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '../AppBar/AppBar.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(135deg, #c7d2fe 0%, #dbeafe 50%, #e2e8f0 100%)',
        color: 'primary.main',
      }}
    >
      <AppBar />
      <Box
        component="main"
        sx={{
          pt: 14,
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
export default Layout;
