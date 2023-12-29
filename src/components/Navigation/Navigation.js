import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggenIn } from '../../redux/auth/authSelectors';
import { MenuItem, Stack } from '@mui/material';

export const Navigation = () => {
  const isLoggen = useSelector(selectIsLoggenIn);
  return (
    <Stack spacing={3} direction="row">
      <MenuItem>
        <NavLink
          style={({ isActive }) => ({
            width: '100%',
            color: isActive ? '#fff' : '#fff',
            textDecoration: 'none',
            fontSize: 20,
          })}
          to={'/'}
        >
          Home
        </NavLink>
      </MenuItem>
      {isLoggen && (
        <MenuItem>
          <NavLink
            style={({ isActive }) => ({
              width: '100%',
              color: isActive ? '#fff' : '#fff',
              textDecoration: 'none',
              fontSize: 20,
            })}
            to={'/contacts'}
          >
            Contacts
          </NavLink>
        </MenuItem>
      )}
    </Stack>
  );
};
