import { useEffect, useState } from 'react';
import { changeFilter } from '../../redux/filtersSlice.js';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue] = useDebounce(inputValue, 200);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className={css.searchField}>
      <div className={css.inputWrapper}>
        <FaSearch className={css.icon} />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={css.input}
          placeholder="Search contacts by name..."
        />
      </div>
    </div>
  );
};
export default SearchBox;
