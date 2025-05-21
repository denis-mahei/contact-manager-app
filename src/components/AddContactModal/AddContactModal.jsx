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
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        p: 4,
        width: '90%',
        maxWidth: 400,
        color: '#fff',
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
