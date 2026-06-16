import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getGoogleAuthUrl, login } from '../../redux/auth/operations.js';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import toast from 'react-hot-toast';
import { loginValidationSchema } from '../../utils/validation.js';
import { FcGoogle } from 'react-icons/fc';
import AuthWrapper from '../Auth/AuthWrapper.jsx';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { selectGoogleLoading } from '../../redux/auth/selectors.js';
import { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm = ({ isLoading }) => {
  const [showPwd, setShowPwd] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGoogleLoading = useSelector(selectGoogleLoading);

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
  const handleShowPwd = () => setShowPwd((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleGoogleLogin = async () => {
    const res = await dispatch(getGoogleAuthUrl());

    if (getGoogleAuthUrl.fulfilled.match(res)) {
      window.location.href = res.payload;
    }
  };

  return (
    <AuthWrapper>
      <Typography
        sx={{
          mb: 3,
        }}
        variant="h5"
        component="h1"
        gutterBottom
        color="secondary.main"
      >
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
            <FormControl
              fullWidth
              sx={{
                mb: 2,
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
                    transition: 'color 0.2s ease-in-out',
                  }}
                />
                <Field
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
                    transition: 'color 0.2s ease-in-out',
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
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  // label="Password"
                  onBlur={handleBlur}
                  helperText={<ErrorMessage name="password" />}
                  variant="standard"
                  error={touched.password && Boolean(errors.password)}
                />
              </Box>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              loading={isLoading}
              loadingPosition="end"
              startIcon={<VpnKeyIcon sx={{ color: 'primary.gold' }} />}
              sx={{
                mt: 2,
                fontSize: '1rem',
              }}
            >
              Sign in
            </Button>

            <Button
              component={Link}
              to="/forgot-password"
              variant="text"
              sx={{
                textTransform: 'capitalize',
                color: 'secondary.main',
              }}
            >
              Forgot password?
            </Button>
          </Form>
        )}
      </Formik>
      <Typography
        variant="body2"
        color="secondary.main"
        sx={{
          textAlign: 'center',
          mb: 2,
          position: 'relative',
        }}
      >
        OR
      </Typography>
      <Button
        type="submit"
        variant="outlined"
        color="secondary"
        fullWidth
        loadingPosition="end"
        loading={isLoading}
        startIcon={<FcGoogle size={24} />}
        onClick={handleGoogleLogin}
        sx={{
          py: 1,
          mb: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="button" sx={{ fontSize: '1rem' }}>
          Sign in with Google
        </Typography>
      </Button>
      <Button
        variant="text"
        component={Link}
        to="/register"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'secondary.main',
          textTransform: 'none',
        }}
      >
        Dont have an account? Sign Up
      </Button>
    </AuthWrapper>
  );
};
export default LoginForm;
