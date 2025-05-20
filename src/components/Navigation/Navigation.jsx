import { Link, NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

const Navigation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Button
        component={NavLink}
        to="/"
        color="inherit"
        sx={{
          '&.active': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
          textTransform: 'uppecase',
          borderRadius: 1,
          px: 2,
          py: 0.5,
        }}
      >
        Home
      </Button>

      <Button
        component={NavLink}
        to="/contacts"
        color="inherit"
        sx={{
          '&.active': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
          textTransform: 'uppecase',
          borderRadius: 1,
          px: 2,
          py: 0.5,
        }}
      >
        Contacts
      </Button>
    </Box>
  );
};
export default Navigation;
