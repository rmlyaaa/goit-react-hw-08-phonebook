import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <MenuItem>
        <NavLink
          style={{
            width: '100%',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 20,
          }}
          to={'/register'}
        >
          Register
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          style={{
            width: '100%',
            color: '#fff',
            textDecoration: 'none',
            fontSize: 20,
          }}
          to={'/login'}
        >
          Log In
        </NavLink>
      </MenuItem>
    </>
  );
};
