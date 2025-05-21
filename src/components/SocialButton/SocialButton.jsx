import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialButtons = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
    }}
  >
    <IconButton
      component="a"
      href="https://github.com/denis-mahei"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.2)',
        },
      }}
    >
      <GitHubIcon />
    </IconButton>

    <IconButton
      component="a"
      href="https://www.linkedin.com/in/denys-mahei-491477333/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#fff',
        borderRadius: '10px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.2)',
        },
      }}
    >
      <LinkedInIcon />
    </IconButton>
  </Box>
);

export default SocialButtons;
