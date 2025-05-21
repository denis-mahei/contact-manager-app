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
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { registerValidationSchema } from '../../utils/validation.js';

const SignUpContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(3),
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  borderRadius: theme.shape.borderRadius,
  backgroundImage:
    'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#222',
}));

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    try {
      await dispatch(register(values));
      toast.success('Successful!');
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
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, handleBlur }) => (
              <Form>
                <FormControl fullWidth margin="normal">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={TextField}
                    id="name"
                    name="name"
                    variant="outlined"
                    size="small"
                    helperText={<ErrorMessage name="name" />}
                    error={touched.name && Boolean(errors.name)}
                    onBlur={handleBlur}
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
                    helperText={<ErrorMessage name="email" />}
                    error={touched.email && Boolean(errors.email)}
                    onBlur={handleBlur}
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
                    helperText={<ErrorMessage name="password" />}
                    error={touched.password && Boolean(errors.password)}
                    onBlur={handleBlur}
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
            )}
          </Formik>
        </CardContent>
      </StyledCard>
    </SignUpContainer>
  );
};
export default RegistrationForm;
