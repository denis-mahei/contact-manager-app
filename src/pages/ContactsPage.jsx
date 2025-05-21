import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactList from '../components/ContactList/ContactList.jsx';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import { Container, Box, Typography } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          py: 4,
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#fff',
            fontWeight: 600,
          }}
        >
          Contacts
        </Typography>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Box>
    </Container>
  );
};
export default ContactsPage;
