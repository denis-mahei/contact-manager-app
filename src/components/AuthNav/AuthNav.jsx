import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const AuthNav = () => {
  return (
    <div>
      <Button
        color="primary"
        variant="text"
        size="small"
        component={NavLink}
        to="/register"
        sx={{
          '&.active': {
            backgroundColor: 'primary.main',
            color: 'white',
          },
        }}
      >
        Sign up
      </Button>

      <Button
        color="primary"
        variant="text"
        size="small"
        component={NavLink}
        to="/login"
        sx={{
          '&.active': {
            backgroundColor: 'primary.main',
            color: 'white',
            borderColor: 'primary.main',
          },
        }}
      >
        Sign in
      </Button>
    </div>
  );
};
export default AuthNav;
