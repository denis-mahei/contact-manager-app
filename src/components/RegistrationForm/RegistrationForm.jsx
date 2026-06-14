import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { registerValidationSchema } from '../../utils/validation.js';
import AuthWrapper from '../Auth/AuthWrapper.jsx';


const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async ( values, action ) => {
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
    <AuthWrapper>
      <Typography variant="h5" gutterBottom>
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
        {( { touched, errors, handleBlur } ) => (
          <Form>
            <FormControl fullWidth sx={{ mb: 1 }}>
              <FormLabel htmlFor="name" sx={{
                mb: 1,
              }}>Name</FormLabel>
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
                helperText={<ErrorMessage name="email" />}
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
              sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              Create account
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
        component={Link}
        to="/login"
      >
        Already have an account? Sign in
      </Button>

    </AuthWrapper>
  );
};
export default RegistrationForm;
