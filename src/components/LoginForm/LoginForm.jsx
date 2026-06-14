import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGoogleAuthUrl, login } from '../../redux/auth/operations.js';
import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { loginValidationSchema } from '../../utils/validation.js';
import { FcGoogle } from 'react-icons/fc';
import AuthWrapper from '../Auth/AuthWrapper.jsx';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

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
    <AuthWrapper>

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
              <FormLabel htmlFor="email" sx={{
                mb: 1,
              }}>Email</FormLabel>
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
              <FormLabel htmlFor="password" sx={{
                mb: 1,
              }}>Password</FormLabel>
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
              sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '1rem' }}
            >
              Login <VpnKeyIcon sx={{ color: 'primary.gold' }} />
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
        <Typography variant="button" sx={{ fontSize: '1rem' }}>
          Sign in with Google
        </Typography>
      </Button>

    </AuthWrapper>
  );
};
export default LoginForm;
