import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contacts/selectors.js';
import Loader from '../Loader/Loader.jsx';

const ConfirmDialog = ( { onConfirm, open, title, onCancel, description } ) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const isLoading = useSelector(selectLoading);

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onCancel}
        aria-labelledby="confirm-dialog-title"
        PaperProps={{
          sx: {
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
            borderRadius: 4,
            p: 4,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03) 45%, transparent 70%)',
              pointerEvents: 'none',
            },
          },
        }}
      >
        <DialogTitle id="confirm-dialog-title" sx={{
          color: 'white',
        }}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 600,
            }}
          >
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'space-between',
            px: 3,
            pb: 2,
          }}
        >
          <Button
            onClick={onCancel}
            sx={{
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            sx={{
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {isLoading && <Loader />}
    </React.Fragment>
  );
};
export default ConfirmDialog;
