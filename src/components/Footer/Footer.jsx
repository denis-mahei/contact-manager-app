import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      p: 3,
      textAlign: 'center',
      backgroundColor: 'transparent',
    }}>
      <Typography>
        Fullstack Developer: Denis Mahei
      </Typography>
      <Typography>
        Contact me:
      </Typography>
    </Box>
  );
};

export default Footer;
