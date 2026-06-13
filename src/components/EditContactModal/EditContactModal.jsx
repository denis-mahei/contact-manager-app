import * as React from 'react';
import { useState } from 'react';
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
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';
import MenuItem from '@mui/material/MenuItem';

const BootstrapDialog = styled(Dialog)(( { theme } ) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
    color: '#fff',
  },
}));

const EditContactModal = ( { id, name, number, contactType } ) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const [type, setType] = useState(contactType);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      await dispatch(
        editContact({
          id,
          contact: {
            name: contactName,
            phoneNumber: contactNumber,
            contactType: type,
          },
        }),
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
      <IconButton
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: '#676462',
          p: '8px',
          fontSize: '1.3rem',
        }}
      >
        <MdModeEditOutline />
      </IconButton>
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
          sx={( theme ) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[ 500 ],
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
          >
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={contactName}
              onChange={( event ) => setContactName(event.target.value)}
              sx={{
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                  padding: '10px 14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#fff',
                  '&.Mui-focused': {
                    color: '#fff',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                  },
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Number"
              variant="outlined"
              value={contactNumber}
              onChange={( event ) => setContactNumber(event.target.value)}
              sx={{
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                  padding: '10px 14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#fff',
                  '&.Mui-focused': {
                    color: '#fff',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                  },
                },
              }}
            />

            <TextField
              id="outlined-basic"
              value={type}
              label="Contact Type"
              select
              onChange={( event ) => setType(event.target.value)}
              variant="outlined"
              sx={{
                input: {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: '#fff',
                  padding: '10px 14px',
                },
                '& .MuiSvgIcon-root': {
                  color: '#fff',
                },
                '& .MuiSelect-select': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root': {
                  color: '#fff',
                  '&.Mui-focused': {
                    color: '#fff',
                  },
                },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 1,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                  },
                },
              }}
            >
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="home">Home</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
            </TextField>


          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSave} sx={{ color: '#fcfcfc' }}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};
export default EditContactModal;
