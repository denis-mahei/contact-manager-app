import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations.js';
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
import toast from 'react-hot-toast';
import { loginValidationSchema } from '../../utils/validation.js';

const SignInContainer = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(1),
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  borderRadius: theme.shape.borderRadius,
  backgroundImage:
    'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#222',
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    try {
      const result = await dispatch(login(values));
      if (login.fulfilled.match(result)) {
        toast.success('Hello! Welcome to Contacts App');
        action.resetForm();
        navigate('/contacts');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <SignInContainer>
      <StyledCard>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign In
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={loginValidationSchema}
          >
            {({ touched, errors, handleBlur }) => (
              <Form>
                <FormControl fullWidth margin="normal">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={TextField}
                    id="email"
                    name="email"
                    type="email"
                    variant="outlined"
                    size="small"
                    helperText={
                      touched.email && errors.email ? errors.email : ''
                    }
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
                    helperText={
                      touched.password && errors.password ? errors.password : ''
                    }
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
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </StyledCard>
    </SignInContainer>
  );
};
export default LoginForm;
