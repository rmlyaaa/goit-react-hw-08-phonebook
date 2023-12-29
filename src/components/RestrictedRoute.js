import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggen = useSelector(selectIsLoggenIn);
  return isLoggen ? <Navigate to={redirectTo} /> : Component;
};
