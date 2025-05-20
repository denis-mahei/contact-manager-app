import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEdit } from 'react-icons/fa';
import css from './EditContactModal.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #1a1a1a 100%)',
    border: '1px solid #dead59',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    borderRadius: 12,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: '#ffd277',
    fontWeight: 600,
  },
}));

const EditContactModal = ({ id, name, number }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      await dispatch(
        editContact({
          id,
          contact: {
            name: contactName,
            number: contactNumber,
          },
        })
      );
      toast.success('Contact updated!');
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FaEdit color="#1c1c1c" />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
          }}
          id="customized-dialog-title"
        >
          Editing
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                m: 1,
                width: '25ch',
              },
            }}
            noValidate
            autoComplete="off"
            className={css.formContainer}
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              sx={{
                input: {
                  color: '#f5f5f5',
                },
                '& .MuiInputLabel-root': {
                  color: '#ffd277',
                  fontSize: '1.1rem',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#dead59',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffd277',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffd277',
                    boxShadow: '0 0 5px #dead59',
                  },
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              sx={{
                input: {
                  color: '#f5f5f5',
                },
                '& .MuiInputLabel-root': {
                  color: '#ffd277',
                  fontSize: '1.1rem',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#dead59',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffd277',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffd277',
                    boxShadow: '0 0 5px #dead59',
                  },
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};
export default EditContactModal;
