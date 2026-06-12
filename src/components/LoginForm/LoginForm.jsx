import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoogleAuthUrl, login } from '../../redux/auth/operations.js';
import { Button, Card, CardContent, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import toast from 'react-hot-toast';
import { loginValidationSchema } from '../../utils/validation.js';
import { FcGoogle } from 'react-icons/fc';

const SignInContainer = styled('div')(( { theme } ) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0),
}));

const StyledCard = styled(Card)(( { theme } ) => ({
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(1),
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  borderRadius: 8,
  backgroundColor: 'primary.bgColor',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#222',
}));

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ( values, action ) => {
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

  const handleGoogleLogin = async () => {
    const res = await dispatch(getGoogleAuthUrl());

    if (getGoogleAuthUrl.fulfilled.match(res)) {
      window.location.href = res.payload;
    }
  };

  return (
    <SignInContainer>
      <StyledCard>
        <CardContent>
          <Typography sx={{
            color: 'primary.main',
          }} variant="h5" component="h1" gutterBottom>
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
            {( { touched, errors, handleBlur } ) => (
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
                  sx={{ mt: 2, py: 1, border: '1px solid primary.main' }}
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          <Typography

            variant="body2"

            color="text.secondary"

            sx={{

              textAlign: 'center',

              my: 2,

              position: 'relative',

            }}

          >

            OR

          </Typography>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleGoogleLogin}
            sx={{ mt: 2, py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}
          >
            <FcGoogle size={24} />
            <Typography variant="button">
              Sign in with Google
            </Typography>
          </Button>

        </CardContent>
      </StyledCard>
    </SignInContainer>
  );
};
export default LoginForm;
