import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors.js';
import { useState } from 'react';
import { Card, CardActionArea, Box, Typography } from '@mui/material';
import AddContactModal from '../AddContactModal/AddContactModal.jsx';
import Contact from '../Contact/Contact.jsx';
import Loader from '../Loader/Loader.jsx';
import AddIcon from '@mui/icons-material/Add';

const ContactList = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const handleOpen = () => setOpenAddModal(true);
  const handleClose = () => setOpenAddModal(false);

  return (
    <>
      {isLoading && <Loader />}
      <Box
        component="ul"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          gap: 2,
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <Card
          sx={{
            minHeight: '115px',
            minWidth: 120,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: 3,
            boxShadow: 0,
            p: 0,
            transition: '0.2s',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#fff',
              boxShadow: 2,
            },
          }}
          onClick={handleOpen}
        >
          <CardActionArea
            sx={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 0,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                userSelect: 'none',
              }}
            >
              <AddIcon fontSize="large" />
              <Typography variant="body2">Add new contact</Typography>
            </Box>
          </CardActionArea>
        </Card>

        {visibleContacts.map((card) => (
          <Contact
            key={card.id}
            id={card.id}
            name={card.name}
            number={card.number}
          />
        ))}
        <AddContactModal open={openAddModal} onClose={handleClose} />
      </Box>
    </>
  );
};
export default ContactList;
