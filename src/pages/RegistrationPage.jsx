import RegistrationForm from '@/RegistrationForm/RegistrationForm.jsx';
import { useSelector } from 'react-redux';
import { selectAuthLoading } from '../redux/auth/selectors.js';

const RegistrationPage = () => {
  const isLoading = useSelector(selectAuthLoading);

  return <RegistrationForm isLoading={isLoading} />;
};
export default RegistrationPage;
