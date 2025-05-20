import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import css from './ConfirmDialog.module.css';

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
            background:
              'radial-gradient(ellipse at center, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid #dead59',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            color: '#dead59',
          },
        }}
      >
        <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: '#d51616' }}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={css.dialogActions}>
          <Button autoFocus onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ConfirmDialog;
