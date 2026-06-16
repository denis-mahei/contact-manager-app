import { Alert, Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectResetEmailLoading } from '../../redux/auth/selectors.js';
import { sendResetEmail } from '../../redux/auth/operations.js';

const ForgotPwdForm = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const isLoading = useSelector(selectResetEmailLoading);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendResetEmail(email)).unwrap();
      setIsSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isSent) {
    return (
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
          }}
        >
          <Alert severity="success">
            Email sent! Check your inbox for reset instructions.
          </Alert>
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '40%',
          border: '2px solid #ffffff',
          borderRadius: 3,
          mx: 'auto',
          p: 2,
          boxShadow: '1px 12px 20px rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(1px)',
          background: 'rgba(255,255 ,255 , .5)',
        }}
      >
        <TextField
          label="Enter your email"
          required
          type="email"
          value={email}
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          loading={isLoading}
          disabled={!email || isLoading}
          variant="contained"
        >
          Send email
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPwdForm;
