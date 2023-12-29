import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPages = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispath = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
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
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
            <Route path="*" element={<NotFoundPages />} />
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
      <Toaster />
      <GlobalStyle />
    </>
  );
};
