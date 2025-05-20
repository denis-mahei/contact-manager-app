import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations.js';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    try {
      await dispatch(register(values));
      action.resetForm();
      navigate('/contacts');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
