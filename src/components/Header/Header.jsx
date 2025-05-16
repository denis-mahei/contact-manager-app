import { MdContacts } from 'react-icons/md';
import SearchBox from '../SearchBox/SearchBox.jsx';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.main}>
        <span className={css.logo}>
          <MdContacts />
        </span>
        <h1 className={css.title}>Contacts</h1>
      </div>
      <SearchBox />
    </header>
  );
};
export default Header;
