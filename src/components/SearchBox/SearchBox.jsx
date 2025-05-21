import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { changeFilter } from '../../redux/filters/slice.js';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, InputAdornment } from '@mui/material';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 200);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
      }}
    >
      <TextField
        fullWidth
        variant="filled"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search contacts ..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#fff' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          input: {
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            color: '#fff',
            padding: '10px 14px',
          },
          label: {
            color: '#fff',
            '&.Mui-focused': {
              color: '#fff',
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
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
        }}
      />
    </Box>
  );
};
export default SearchBox;
