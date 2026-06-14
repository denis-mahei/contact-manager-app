import { Badge, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFavouriteContacts } from '../../redux/contacts/selectors.js';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Popover from '@mui/material/Popover';

const Favorite = () => {
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = ( event ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const favorite = useSelector(selectFavouriteContacts);
  return (
    <>
      <IconButton aria-label="favourite" color="primary" onClick={handleOpen}>
        <Badge
          badgeContent={favorite.length}
          color="secondary"
          variant="standard"
        >
          <FavoriteIcon />
        </Badge>
      </IconButton>
      <Popover
        open={open}

        anchorEl={anchorEl}

        onClose={handleClose}

        anchorOrigin={{

          vertical: 'bottom',

          horizontal: 'center',

        }}

        transformOrigin={{

          vertical: 'top',

          horizontal: 'center',

        }}

        PaperProps={{
          sx: {
            background: 'rgb(74 74 74 / 0.2)',

            backdropFilter: 'blur(8px)',

            WebkitBackdropFilter: 'blur(8px)',

            border: '2px solid rgba(255,255,255,0.2)',

            borderRadius: 4,

            boxShadow: '0 25px 70px rgba(0,0,0,0.6)',

            minWidth: 320,

            color: '#fff',

          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {favorite.length > 0 ? (
            favorite.map(( item ) => (
              <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>{item.name}</Typography>
                <Typography>{item.phoneNumber}</Typography>
              </Box>
            ))
          ) : (
            <Typography>No favourites</Typography>
          )}
        </Box> </Popover>
    </>
  );
};

export default Favorite;
