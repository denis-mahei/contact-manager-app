import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.main',
        maxWidth: '555px',
      }}
    >
      <Box
        sx={{
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(2px)',
          border: '4px solid rgba(255,255,255,0.5)',
          borderRadius: 4,
          boxShadow:
            '0 20px 60px rgba(0, 0, 0, 0.35), inset 0 32px 20px rgba(255, 255, 255, 0.5)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-150%',
            left: '-150%',
            width: '80%',
            height: '100%',
            transform: 'rotate(25deg)',
            animation: 'cardShine 8s linear infinite',
          },

          '@keyframes cardShine': {
            '0%': {
              transform: 'translateX(-250%) translateY(-50%) rotate(25deg)',
            },
            '100%': {
              transform: 'translateX(350%) translateY(50%) rotate(25deg)',
            },
          },
          p: 3,
          maxWidth: 700,
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          gap: { xs: 1, sm: 3 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '30px', sm: '42px', md: '64px' },
            fontWeight: 900,
            background:
              'linear-gradient(160deg, #667eea 30%, #ffffff 50%, #764ba2 70%)',
            backgroundSize: '250% auto',
            animation: 'shine 10s linear infinite',
            '@keyframes shine': {
              '0%': {
                backgroundPosition: '200% center',
              },
              '100%': {
                backgroundPosition: '-200% center',
              },
            },
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contact Book
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '14px', sm: '20px' },
          }}
        >
          Organize your connections. Quick. Simple. Secure.
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Created by Denys Mahei
        </Typography>
      </Box>
    </Container>
  );
};
export default HomePage;
