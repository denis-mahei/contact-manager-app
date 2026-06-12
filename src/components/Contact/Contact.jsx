import { useDispatch, useSelector } from 'react-redux';
import { FaPhoneAlt, FaUserTie } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { deleteContact, toggleFavorite } from '../../redux/contacts/operations.js';
import EditContactModal from '../EditContactModal/EditContactModal.jsx';
import { useState } from 'react';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog.jsx';
import toast from 'react-hot-toast';
import { FiUserX } from 'react-icons/fi';
import { selectLoading } from '../../redux/contacts/selectors.js';
import Loader from '../Loader/Loader.jsx';
import { GoHeart, GoHeartFill } from 'react-icons/go';


const Contact = ( { id, name, phoneNumber, contactType, isFav } ) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleDelete = ( id ) => {
    setContactToDelete(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteContact(contactToDelete));

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

  const handleToggleFavorite = async ( id ) => {
    await dispatch(toggleFavorite(id));

    setFavourite(prevState => !prevState);
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
          color: 'primary.main',
          minWidth: '50%',
          cursor: 'pointer',
          transition: '0.2s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#fff',
            boxShadow: 3,
          },
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
              color: 'inherit',
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
              color: 'inherit',
            }}
          >
            <FaPhoneAlt color="#dead59" />
            {phoneNumber}
          </Typography>
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.7)"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: 16,
              color: 'inherit',
            }}
          >
            <FaPhoneAlt color="#dead59" />
            {contactType}
          </Typography>

        </CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton
            onClick={() => handleDelete(id)}
            sx={{ color: '#676462' }}
          >
            <MdDelete />
          </IconButton>
          <IconButton
            onClick={() => handleToggleFavorite(id)}
            sx={{ color: '#ba3939' }}
          >
            {favourite ? <GoHeartFill /> : <GoHeart />}
          </IconButton>
          <EditContactModal id={id} name={name} number={phoneNumber} contactType={contactType} favour={isFav} />
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
