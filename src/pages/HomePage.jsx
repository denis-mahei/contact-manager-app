import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 3,
          boxShadow: 4,
          p: 5,
          maxWidth: 600,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contact Book
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Organize your connections. Quick. Simple. Secure.
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Created by Denys Mahei
        </Typography>
      </Box>
    </Box>
  );
};
export default HomePage;
