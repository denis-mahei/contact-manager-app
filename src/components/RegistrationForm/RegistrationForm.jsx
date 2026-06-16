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
        sx={{ mb: 3, color: 'secondary.main' }}
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
              <Box
                sx={{
                  display: 'flex',
                  '&:has(input:focus) .field-icon': {
                    color: 'secondary.main',
                    outline: 'white',
                  },
                }}
              >
                <AccountCircle
                  className="field-icon"
                  sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5,
                    transition: 'color .2s ease-in-out',
                  }}
                />
                <Field
                  as={TextField}
                  placeholder="Your name"
                  sx={{
                    width: '100%',
                    '& .MuiInput-underline::after': {
                      borderColor: '#fff',
                    },
                    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'secondary.main',
                    },
                  }}
                  id="name"
                  name="name"
                  type="text"
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
              <Box
                sx={{
                  display: 'flex',
                  '&:has(input:focus) .field-icon': {
                    color: 'secondary.main',
                    outline: 'white',
                  },
                }}
              >
                <AlternateEmailIcon
                  className="field-icon"
                  sx={{
                    color: 'action.active',
                    mr: 1,
                    my: 0.5,
                    transition: 'color .2s ease-in-out',
                  }}
                />
                <Field
                  as={TextField}
                  placeholder="Your email address"
                  sx={{
                    width: '100%',
                    '& .MuiInput-underline::after': {
                      borderColor: '#fff',
                    },
                    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'secondary.main',
                    },
                  }}
                  id="email"
                  name="email"
                  type="email"
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="email" />}
                  variant="standard"
                  error={touched.email && Boolean(errors.email)}
                />
              </Box>
            </FormControl>

            <FormControl sx={{ mb: 1 }} fullWidth>
              <Box
                sx={{
                  display: 'flex',
                  '&:has(input:focus) .field-icon': {
                    color: 'secondary.main',
                    outline: 'white',
                  },
                }}
              >
                <PasswordIcon
                  className="field-icon"
                  sx={{
                    color: 'action.active',
                    mr: 1,
                    transition: 'color .2s ease-in-out',
                  }}
                />
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
                    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                      color: 'secondary.main',
                    },
                  }}
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
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
        color="secondary"
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
