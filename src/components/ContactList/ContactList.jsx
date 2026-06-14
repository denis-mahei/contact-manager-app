import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import { Box, Typography } from '@mui/material';
import Contact from '../Contact/Contact.jsx';


const ContactList = () => {

  const visibleContacts = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectLoading);


  return (
    <>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
          padding: 0,
          margin: 0,
        }}
      >
        {visibleContacts.length > 0 ? (visibleContacts.map(( card ) => (
          <Contact
            key={card._id ?? card.id}
            id={card._id ?? card.id}
            name={card.name}
            phoneNumber={card.phoneNumber}
            contactType={card.contactType}
            isFavourite={card.isFavourite}
            contact={card.contact}
            photo={card.photo}
          />
        ))) : <Typography variant="h5" sx={{ textAlign: 'center' }}>
          No contacts yet.
        </Typography>}

      </Box>
    </>
  );
};
export default ContactList;
