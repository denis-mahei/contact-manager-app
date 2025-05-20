import { useDispatch } from 'react-redux';
import { FaPhoneAlt, FaUserTie, FaTrashAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/contacts/operations.js';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';
import css from './Contact.module.css';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.jsx';
import toast from 'react-hot-toast';
import { FiUserX } from 'react-icons/fi';

const Contact = ({ id, name, number }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setContactToDelete(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contactToDelete));
    setConfirmOpen(false);
    setContactToDelete(null);
    toast(`${name} was been deleted!`, {
      icon: (
        <FiUserX
          style={{
            color: 'red',
            fontSize: '1.2rem',
          }}
        />
      ),
    });
  };

  const handleCancelDelete = () => {
    setConfirmOpen(false);
    setContactToDelete(null);
  };

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
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className={css.deleteBtn}
        >
          <FaTrashAlt color="#1c1c1c" />
        </button>
        <div>
          <EditContactModal id={id} name={name} number={number} />
        </div>
        <ConfirmDialog
          open={confirmOpen}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          title="Delete"
          description={`Are you sure you want to delete ${name}?`}
        />
      </div>
    </li>
  );
};
export default Contact;
