import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from '@mui/material';
import { styled } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';

const SignUpContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(3),
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  borderRadius: theme.shape.borderRadius,
}));

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    try {
      await dispatch(register(values));

      action.resetForm();
      navigate('/contacts');
    } catch (e) {
      toast.error('Email already exists or is invalid');
    }
  };

  return (
    <SignUpContainer>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Field
                  as={TextField}
                  id="name"
                  name="name"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>
            </Form>
          </Formik>
        </CardContent>
      </StyledCard>
    </SignUpContainer>
  );
};
export default RegistrationForm;
