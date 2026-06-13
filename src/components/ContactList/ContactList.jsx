import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectLoading } from '../../redux/contacts/selectors.js';
import { Box } from '@mui/material';
import Contact from '../Contact/Contact.jsx';
import Loader from '../Loader/Loader.jsx';


const ContactList = () => {

  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);


  return (
    <>
      {isLoading && <Loader />}
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
        {visibleContacts.map(( card ) => (
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
        ))}

      </Box>
    </>
  );
};
export default ContactList;
