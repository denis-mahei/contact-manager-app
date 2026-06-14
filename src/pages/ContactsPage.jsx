import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactList from '@/ContactList/ContactList.jsx';
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { selectLoading } from '../redux/contacts/selectors.js';
import NewContact from '../components/NewContact/NewContact.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import { ContactListSkeleton } from '../ui/skeleton.jsx';
import { selectTypeFilter } from '../redux/filters/selectors.js';
import { changeTypeFilter } from '../redux/filters/slice.js';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const typeFilter = useSelector(selectTypeFilter);

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
          p: { xs: 1, md: 3 },
        }}
      >

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '100%',
          gap: { xs: 2, md: 3 },
          alignItems: 'flex-end',
        }}>
          <NewContact />
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'flex-end',
          }}>
            <SearchBox />
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Contact Type</InputLabel>

              <Select
                variant="outlined"
                value={typeFilter}
                label="Contact Type"
                onChange={( e ) => dispatch(changeTypeFilter(e.target.value))}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="work">Work</MenuItem>
                <MenuItem value="home">Home</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        {isLoading ? <ContactListSkeleton /> : <ContactList />}
      </Box>
    </Container>
  );
};
export default ContactsPage;
