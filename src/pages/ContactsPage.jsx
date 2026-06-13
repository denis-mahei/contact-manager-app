import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactList from '@/ContactList/ContactList.jsx';
import { Box, Container } from '@mui/material';
import { selectLoading } from '../redux/contacts/selectors.js';
import Loader from '@/Loader/Loader.jsx';
import NewContact from '../components/NewContact/NewContact.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
          borderRadius: 4,
          gap: 4,
          p: 4,
        }}
      >


        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <NewContact />
          <SearchBox />
        </Box>
          <ContactList />


        {isLoading && <Loader />}
      </Box>
    </Container>
  );
};
export default ContactsPage;
