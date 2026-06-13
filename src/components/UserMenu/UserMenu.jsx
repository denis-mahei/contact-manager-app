import { Box, Typography } from '@mui/material';
import { logOut } from '../../redux/auth/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import Button from '@mui/material/Button';
import { IoIosLogOut } from 'react-icons/io';
import { selectFavouriteContacts } from '../../redux/contacts/selectors.js';
import Favorite from '../Favorite/Favorite.jsx';

const UserMenu = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavouriteContacts);
  const { name } = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >

      <Typography variant="body1" color="inherit">
        Welcome, {name}!
      </Typography>
      <Typography variant="button" color='textPrimary'>
        <Favorite isfav={favorites} />
      </Typography>
      <Button
        onClick={() => dispatch(logOut())}
        color="inherit"
        variant="outlined"
        size="small"
        sx={{
          textTransform: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 1.5,
          py: 0.4,
        }}
      >
        <IoIosLogOut style={{ fontSize: '1.2rem' }} />
      </Button>
    </Box>
  );
};
export default UserMenu;
