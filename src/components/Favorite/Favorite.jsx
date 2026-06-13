import { Badge, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectFavouriteContacts } from '../../redux/contacts/selectors.js';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';

const Favorite = () => {
  const [open, setOpen] = useState(false);
  const favorite = useSelector(selectFavouriteContacts);
  return (
    <>
      <IconButton aria-label="favourite" color="primary" onClick={() => setOpen(true)}>
      <Badge
        badgeContent={favorite.length}
        color="secondary"
        variant="standard"
      >
        <FavoriteIcon />
      </Badge>
    </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgb(74 74 74 / 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 4,
            boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
            minWidth: 320,
            color: '#fff',
          },
        }}
      >
        <Box sx={{ p: 2 }}>

        </Box>
      </Dialog>
    </>
  );
};

export default Favorite;
