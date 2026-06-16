import { Box, Modal } from '@mui/material';
import ContactForm from '../ContactForm/ContactForm.jsx';
import { IoMdContact } from 'react-icons/io';

const AddContactModal = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(3px)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow:
          '0 20px 60px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        borderRadius: 4,
        p: 4,
        width: '90%',
        maxWidth: 400,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <IoMdContact style={{ fontSize: 86 }} />
      </Box>
      <ContactForm onClose={onClose} />
    </Box>
  </Modal>
);
export default AddContactModal;
