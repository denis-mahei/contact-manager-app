import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ConfirmDialog = ({ onConfirm, open, title, onCancel, description }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onCancel}
        aria-labelledby="confirm-dialog-title"
        PaperProps={{
          sx: {
            backgroundImage:
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            color: '#fdfdfd',
          },
        }}
      >
        <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              color: '#ec0b0b',
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
    </React.Fragment>
  );
};
export default ConfirmDialog;
