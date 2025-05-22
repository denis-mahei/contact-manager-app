import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
          textTransform: 'uppercase',
          borderRadius: 1,
          px: 2,
          py: 0.5,
        }}
      >
        Home
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
          sx={{
            '&.active': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
            textTransform: 'uppercase',
            borderRadius: 1,
            px: 2,
            py: 0.5,
          }}
        >
          Contacts
        </Button>
      )}
    </Box>
  );
};
export default Navigation;
