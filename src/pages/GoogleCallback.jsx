import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { confirmGoogleOAuth } from '../redux/auth/operations.js';

const GoogleCallback = () => {
  const code = new URLSearchParams(window.location.href).get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) return;

    dispatch(confirmGoogleOAuth(code))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(() => {
        navigate('/login');
      });
  }, [code, dispatch, navigate]);
  return <div>Logging in with Google...</div>;
};

export default GoogleCallback;