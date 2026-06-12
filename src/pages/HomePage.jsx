import { Box, Typography } from '@mui/material';
import SocialButtons from '@/SocialButton/SocialButton.jsx';

const HomePage = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(135deg, #c7d2fe 0%, #dbeafe 50%, #e2e8f0 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'primary.main',
        p: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-150%',
            left: '-150%',
            width: '80%',
            height: '400%',
            background:
              'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
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
          borderRadius: 4,
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
          p: 5,
          maxWidth: 700,
          width: '100%',
          transition: 'transform .2s ease, box-shadow .2s ease',
          '&:hover': {

            transform: 'translateY(-4px)',

            boxShadow: '0 24px 60px rgba(0,0,0,0.12)',

          },
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >

        <Typography
          variant="h2"
          sx={{
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
        <Typography variant="h6" color="text.secondary">
          Organize your connections. Quick. Simple. Secure.
        </Typography>
        <Typography variant="body2" color="text.disabled">
          Created by Denys Mahei
        </Typography>
        <SocialButtons />
      </Box>
    </Box>
  );
};
export default HomePage;
