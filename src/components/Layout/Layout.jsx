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
        color: 'primary.main',
        //   background: `
        //   repeating-linear-gradient(
        //     60deg,
        //     transparent 0px,
        //     transparent 1px,
        //     rgba(255, 255, 255, 0.05) 1px,
        //     rgba(255, 255, 255, 0.05) 2px
        //   ),
        //   repeating-linear-gradient(
        //     -60deg,
        //     transparent 0px,
        //     transparent 1px,
        //     rgba(255, 255, 255, 0.05) 1px,
        //     rgba(255, 255, 255, 0.05) 2px
        //   ),
        //   linear-gradient(
        //     60deg,
        //     rgba(43, 108, 176, 0.4) 0%,
        //     rgba(72, 126, 176, 0.4) 33%,
        //     rgba(95, 142, 176, 0.4) 66%,
        //     rgba(116, 157, 176, 0.4) 100%
        //   ),
        //   radial-gradient(
        //     circle at 50% 50%,
        //     rgba(255, 255, 255, 0.2) 0%,
        //     transparent 50%
        //   )
        // `,
        background: 'rgb(255 255 255 / 0.61)',
        backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
        backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
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
