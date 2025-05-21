import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactList from '../components/ContactList/ContactList.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import { Container, Box, Typography } from '@mui/material';
import { selectLoading } from '../redux/contacts/selectors.js';
import Loader from '../components/Loader/Loader.jsx';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
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
            pt: 10,
          }}
        >
          <SearchBox />
        </Typography>

        <ContactList />
        {isLoading && <Loader />}
      </Box>
    </Container>
  );
};
export default ContactsPage;
