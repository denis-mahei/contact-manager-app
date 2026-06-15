import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

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
        background: '#000',
        color: '#f5f5f5',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.1)',
          color: '#333',
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
        background: '#13468a',
        color: '#fff',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.2)',
          color: '#13468a',
        },
      }}
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      component="a"
      href="mailto:denmahei@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: '#134da8',
        color: '#fff',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.2)',
          color: '#134da8',
        },
      }}
    >
      <EmailIcon />
    </IconButton>
    <IconButton
      component="a"
      href="https://t.me/denismahei"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        background: '#0a94e6',
        color: '#fff',
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          filter: 'brightness(1.2)',
          color: '#0a94e6',
        },
      }}
    >
      <TelegramIcon />
    </IconButton>
  </Box>
);

export default SocialButtons;
