import { Box, Typography } from '@mui/material';
import SocialButton from '../SocialButton/SocialButton.jsx';

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
        borderTop: '3px solid rgba(255,255,255,0.9)',
        borderRadius: '8px 0 0 0',
        backgroundColor: 'rgba(255 255 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '6px 14px 40px -14px rgba(255,255,255,0.9) inset',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          letterSpacing: '0.5px',
          textAlign: 'center',
        }}
      >
        Designed & Developed by 👨‍💻 Denis Mahei
      </Typography>
      <SocialButton />
      <Typography
        sx={{
          opacity: 0.8,
          fontSize: '0.95rem',
        }}
      >
        Built with React & Node.js
      </Typography>
      <Typography
        sx={{
          opacity: 0.6,
          fontSize: '0.85rem',
        }}
      >
        © 2026 Contact Manager
      </Typography>
    </Box>
  );
};

export default Footer;
