import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';
import ContactList from '@/ContactList/ContactList.jsx';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            gap: { xs: 3, md: 4 },
            alignItems: 'center',
          }}
        >
          <SearchBox />
          <NewContact />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'flex-end',
            }}
          >
            <FormControl
              variant="outlined"
              size="small"
              sx={{
                minWidth: 120,
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 0 12px rgba(255,255,255,0.5)',
                  },
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(255 255 255 / 0.37)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#505050',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'primary',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'primary',
                },
                '& .MuiSelect-select': {
                  color: 'inherit',
                },
                '& .MuiSvgIcon-root': {
                  color: 'inherit',
                },
              }}
            >
              <InputLabel>Contact Type</InputLabel>

              <Select
                variant="outlined"
                value={typeFilter}
                label="Contact Type"
                onChange={(e) => dispatch(changeTypeFilter(e.target.value))}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03) 45%, transparent 70%)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: 2,
                      color: 'primary',
                      boxShadow:
                        '0 20px 60px rgba(0,0,0,0.15), inset 0 20px 60px rgba(255, 255, 255, 0.3)',
                    },
                  },
                }}
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
