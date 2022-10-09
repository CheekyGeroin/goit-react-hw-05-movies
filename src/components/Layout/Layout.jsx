import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLayout } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <StyledLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </StyledLayout>
    </div>
  );
};

export default Layout;
