import LoginForm from '@/LoginForm/LoginForm.jsx';
import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../redux/auth/selectors.js';

const LoginPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return <LoginForm isLoading={isLoading} />;
};
export default LoginPage;
