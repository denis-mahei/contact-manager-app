import { useDispatch, useSelector } from 'react-redux';
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { deleteContact } from '../../redux/contacts/operations.js';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.jsx';
import toast from 'react-hot-toast';
import { FiUserX } from 'react-icons/fi';
import { selectLoading } from '../../redux/contacts/selectors.js';
import Loader from '../Loader/Loader.jsx';

const Contact = ({ id, name, number }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const isLoading = useSelector(selectLoading);
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
    <>
      {isLoading && <Loader />}
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: 2,
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fdfdfd',
          minWidth: '50%',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: 18,
            }}
          >
            <FaUserTie color="#dead59" />
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.7)"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: 16,
            }}
          >
            <FaPhoneAlt color="#dead59" />
            {number}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton
            onClick={() => handleDelete(id)}
            sx={{ color: '#f5f5f5' }}
          >
            <MdDelete />
          </IconButton>
          <EditContactModal id={id} name={name} number={number} />
          <ConfirmDialog
            open={confirmOpen}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
            title="Delete"
            description={`Are you sure you want to delete ${name}?`}
          />
        </Box>
      </Card>
    </>
  );
};
export default Contact;
