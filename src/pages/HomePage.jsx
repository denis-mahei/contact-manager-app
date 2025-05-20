import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: 3,
          p: 4,
          maxWidth: 500,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Contact Book
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A simple app to store and manage your contacts.
        </Typography>
        <Typography sx={{ mt: 4 }} color="text.disabled">
          Created by Denys Mahei
        </Typography>
      </Box>
    </Box>
  );
};
export default HomePage;
