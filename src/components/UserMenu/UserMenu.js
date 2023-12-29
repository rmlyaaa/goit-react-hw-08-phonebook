import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/operations';
import { Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <>
      <PersonIcon />
      <Typography>{user.name}</Typography>
      <Button
        color="info"
        variant="contained"
        disableElevation
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
