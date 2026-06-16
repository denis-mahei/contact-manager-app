import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

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
        sx={{
          '&.active': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
          borderRadius: 2,
          color: 'primary.main',
          px: 1,
          py: 0.5,
        }}
      >
        <HomeFilledIcon />
      </Button>

      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          sx={{
            '&.active': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
            borderRadius: 2,
            p: 0.5,
          }}
        >
          <ContactPhoneIcon />
        </Button>
      )}
    </Box>
  );
};
export default Navigation;
