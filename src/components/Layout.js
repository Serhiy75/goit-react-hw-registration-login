import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: '100%',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '0 16px',
        background:
          'linear-gradient(338deg, rgb(86, 43, 134) 12%, rgb(37, 21, 86) 54%, rgb(86, 42, 139) 90%) no-repeat',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
