import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{ maxWidth: 1440, margin: '0 auto', padding: '150px 128px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
