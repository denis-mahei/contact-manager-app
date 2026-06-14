import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import { changeNameFilter } from '../../redux/filters/slice.js';
import { Box, TextField } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    ( value ) => dispatch(changeNameFilter(value)),
    300,
  );

  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: { xs: '50%', md: 'auto' }
        }}
      >
        <SearchIcon
          sx={{
            color: 'rgb(103 100 98)',
            mr: 1,
            my: 0.5,
          }}
        />
        <TextField
          id="input-with-sx"
          label="Search contacts..."
          variant="standard"
          defaultValue={filterValue}
          onChange={( e ) => debounced(e.target.value)}
          sx={{
            input: {
              background: 'transparent',
              color: '#676462',
              padding: '10px 14px',
            },
            label: {
              color: 'rgba(255, 255, 255, 0.6)',
              '&.Mui-focused': {
                color: 'primary.main',
              },
            },
            '& .MuiFilledInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 1,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'border 0.3s ease, box-shadow 0.3s ease',
              '&:before': {
                borderBottom: 'none',
              },
              '&:after': {
                borderBottom: 'none',
              },
              '&:hover': {
                border: '1px solid rgba(255, 255, 255, 0.3)',
              },
            },
            '& .MuiFilledInput-root.Mui-focused': {
              border: '1px solid #fff',
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
              backgroundColor: 'rgba(255, 255, 255, 0.09)',
            },
          }}
        />
      </Box>
  );
};
export default SearchBox;
