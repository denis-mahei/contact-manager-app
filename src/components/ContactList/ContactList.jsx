import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.cardContainer}>
      {visibleContacts.map((card) => (
        <Contact
          key={card.id}
          id={card.id}
          name={card.name}
          number={card.number}
        />
      ))}
    </ul>
  );
};
export default ContactList;
