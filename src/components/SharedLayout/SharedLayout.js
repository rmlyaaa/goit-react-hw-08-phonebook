import { Container } from '@mui/material';
import { AppBars } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <AppBars />
      </header>
      <Container maxWidth="lg">
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
