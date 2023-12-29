import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispath = useDispatch();
  const handleRegister = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispath(
      register({
        name: form.elements.name.value,
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
          onSubmit={evt => handleRegister(evt)}
        >
          <Typography variant="h4" textAlign="center" mb={2}>
            Register
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            margin="dense"
          />
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
            signup
          </Button>
        </Box>
      </Box>
    </>
  );
};
