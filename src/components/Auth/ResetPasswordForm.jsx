import { Box, Button, Container, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { resetPassword } from '../../service/api.js';
import { selectResetPasswordLoading } from '../../redux/auth/selectors.js';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectResetPasswordLoading);

  const handleSubmitPwd = async (e) => {
    e.preventDefault();
    try {
      await dispatch(resetPassword({ token, password })).unwrap();

      setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmitPwd}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          variant="outlined"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          disabled={!password || isLoading}
          variant="contained"
          type="submit"
          loading={isLoading}
          sx={{
            mt: '1rem',
          }}
        >
          Change password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPasswordForm;
