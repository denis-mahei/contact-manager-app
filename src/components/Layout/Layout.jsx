import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from '../AppBar/AppBar.jsx';
import Toolbar from '@mui/material/Toolbar';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:
          'linear-gradient(135deg, #c7d2fe 0%, #dbeafe 50%, #e2e8f0 100%)',
        color: 'primary.main',
      }}
    >
      <AppBar />
      <Toolbar variant="regular" />
      <Toolbar variant="regular" />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Toolbar variant="regular" />
      <Footer />
    </Box>
  );
};
export default Layout;
