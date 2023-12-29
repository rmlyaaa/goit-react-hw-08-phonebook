import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from '../../redux/auth/authSelectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Box, Container, Stack, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';

export const AppBars = () => {
  const isLoggen = useSelector(selectIsLoggenIn);
  return (
    <>
      <Box>
        <AppBar position="static" color="info">
          <Container>
            <Toolbar>
              <Navigation />
              <Stack
                spacing={2}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                sx={{ flexGrow: 1 }}
              >
                {isLoggen ? <UserMenu /> : <AuthNav />}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
