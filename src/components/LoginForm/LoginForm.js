import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Box, Button, TextField, Typography } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box
          component="form"
          flexGrow={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: 15,
            mr: 15,
            mt: 5,
          }}
          noValidate
          autoComplete="off"
          onSubmit={evt => handleLogin(evt)}
        >
          <Typography variant="h4" textAlign="center" mb={2}>
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            margin="dense"
            type="email"
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            margin="dense"
            type="password"
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{ mt: 2, height: 60, fontSize: 22, backgroundColor: '#42a5f5' }}
          >
            log in
          </Button>
        </Box>
      </Box>
    </>
  );
};
