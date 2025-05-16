import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps.js';
import { selectError, selectLoading } from '../redux/contactsSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import Layout from './Layout/Layout.jsx';
import Header from './Header/Header.jsx';
import Loader from './Loader/Loader.jsx';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(`Oops! ${error}`);
    }
  }, [error]);

  return (
    <>
      <Header />
      <Layout>
        <ContactForm />
        {loading && <Loader />}
        <ContactList />
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </>
  );
};

export default App;
