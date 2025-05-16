import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.cardContainer}>
      {visibleContacts.map((card) => (
        <Contact {...card} key={card.id} />
      ))}
    </ul>
  );
};
export default ContactList;
