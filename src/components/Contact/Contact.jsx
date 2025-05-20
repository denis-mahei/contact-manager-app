import { useDispatch } from 'react-redux';
import { FaPhoneAlt, FaUserTie, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteContact, editContact } from '../../redux/contacts/operations.js';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => dispatch(editContact(id));

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

      <div>
        <button type="button" onClick={handleDelete} className={css.deleteBtn}>
          <FaTrashAlt color="#1c1c1c" />
        </button>
        <button type="button" onClick={handleUpdate}>
          <FaEdit color="#1c1c1c" />
        </button>
      </div>
    </li>
  );
};
export default Contact;
