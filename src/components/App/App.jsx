import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from '../../redux/auth/selectors.js';
import { refreshUser } from '../../redux/auth/operations.js';
import { setToken } from '../../redux/auth/slice.js';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import Layout from '../Layout/Layout.jsx';
import { setAuthHeader } from '../../service/api.js';
import ResetPasswordPage from '../../pages/ResetPasswordPage.jsx';

const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage.jsx'));
const GoogleCallback = lazy(() => import('../../pages/GoogleCallback.jsx'));
const ForgotPwdPage = lazy(() => import('../../pages/ForgotPasswordPage.jsx'));
const ResetPwdPage = lazy(() => import('../../pages/ResetPasswordPage.jsx'));

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const legacyToken = localStorage.getItem('token');

    if (legacyToken) {
      localStorage.removeItem('token');
      dispatch(setToken(legacyToken));
      return;
    }

    if (token) {
      setAuthHeader(token);
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  const isAuthLoading = Boolean(token) && !isLoggedIn;

  return isAuthLoading || isRefreshing ? (
    <strong>Refreshing user ...</strong>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />

          <Route path="/confirm-google-auth" element={<GoogleCallback />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="/forgot-password" element={<ForgotPwdPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
