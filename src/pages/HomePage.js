import { Box, Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Stack maxWidth={720}>
          <Typography
            textAlign={'center'}
            variant="h2"
            sx={{ marginTop: 10, marginBottom: 6 }}
          >
            Your Phone Book is Here!
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{ height: 60, backgroundColor: '#42a5f5' }}
          >
            <NavLink
              style={{
                width: '100%',
                color: '#fff',
                textDecoration: 'none',
              }}
              to={'/contacts'}
            >
              Get started!
            </NavLink>
          </Button>
        </Stack>
      </Box>
    </>
  );
}
