import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggenIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggen = useSelector(selectIsLoggenIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggen && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
