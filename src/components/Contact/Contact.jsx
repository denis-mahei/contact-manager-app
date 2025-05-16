import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps.js';
import { FaPhoneAlt, FaUserTie, FaTrashAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li key={id} className={css.userCard}>
      <div>
        <p className={css.cardItem}>
          <FaUserTie color="#dead59" />
          {name}
        </p>

        <p className={css.cardItem}>
          <FaPhoneAlt color="#dead59" />
          {number}
        </p>
      </div>

      <button onClick={handleDelete} className={css.deleteBtn}>
        <span>
          <FaTrashAlt color="#1c1c1c" />
        </span>
      </button>
    </li>
  );
};
export default Contact;
