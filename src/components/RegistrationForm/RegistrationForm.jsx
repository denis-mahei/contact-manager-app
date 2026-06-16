import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations.js';
import toast from 'react-hot-toast';
import { registerValidationSchema } from '../../utils/validation.js';
import AuthWrapper from '../Auth/AuthWrapper.jsx';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';

import PasswordIcon from '@mui/icons-material/Password';

const RegistrationForm = ({ isLoading }) => {
  const [showPwd, setShowPwd] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPwd = () => setShowPwd((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

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
    <AuthWrapper>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 3, color: 'primary.main' }}
      >
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
            <FormControl
              fullWidth
              sx={{
                mb: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <Field
                  as={TextField}
                  sx={{
                    width: '100%',
                    '& .MuiInput-underline::after': {
                      borderColor: '#fff',
                    },
                  }}
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="name" />}
                  variant="standard"
                  error={touched.name && Boolean(errors.name)}
                />
              </Box>
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                mb: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AlternateEmailIcon
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <Field
                  as={TextField}
                  sx={{
                    width: '100%',
                    '& .MuiInput-underline::after': {
                      borderColor: '#fff',
                    },
                  }}
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="email" />}
                  variant="standard"
                  error={touched.email && Boolean(errors.email)}
                />
              </Box>
            </FormControl>

            <FormControl sx={{ mb: 1 }} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PasswordIcon sx={{ color: 'action.active', mr: 1 }} />
                <Field
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label={
                              showPwd
                                ? 'hide the password'
                                : 'display the password'
                            }
                            onClick={handleShowPwd}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="start"
                          >
                            {showPwd ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  as={TextField}
                  sx={{
                    width: '100%',
                    '& .MuiInput-underline::after': {
                      borderColor: '#fff',
                    },
                  }}
                  id="password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  label="Password"
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="password" />}
                  variant="standard"
                  error={touched.password && Boolean(errors.password)}
                />
              </Box>
            </FormControl>
            <Button
              type="submit"
              disabled={isLoading}
              variant="contained"
              loading={isLoading}
              loadingPosition="end"
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
        loading={isLoading}
        fullWidth
        component={Link}
        to="/login"
      >
        Already have an account?
      </Button>
    </AuthWrapper>
  );
};
export default RegistrationForm;
