import { Box, Card, CardActionArea } from '@mui/material';
import AddContactModal from '../AddContactModal/AddContactModal.jsx';
import { RiAddFill } from 'react-icons/ri';
import { useState } from 'react';

const NewContact = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpen = () => setOpenAddModal(true);
  const handleClose = () => setOpenAddModal(false);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Card sx={{
        backgroundColor: 'transparent',
        cursor: 'pointer',
        borderRadius: 2,
        transition: '0.2s',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: 3,
        },
      }}>
        <CardActionArea
          onClick={handleOpen}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1.5,
          }}
        >
          <RiAddFill size={36} color="#676462" />
        </CardActionArea>
      </Card>
      <AddContactModal open={openAddModal} onClose={handleClose} />

    </Box>
  );
};

export default NewContact;