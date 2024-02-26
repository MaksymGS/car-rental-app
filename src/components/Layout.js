import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  min-width: 1440px;
  min-height: 100vh;
  margin: 0 auto 0;
  padding: 0 128px 150px;
`;

const Header = styled.header`
width: 100rem;
  background: #eef5ff;
  border-radius: 8px;
  margin: 0 auto 50px;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  padding-left: 120px;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  padding: 16px 8px;
  display: block;
  text-decoration: none;
  color: #5996ff;
  &.active {
    color: #192d8f;
    font-weight: 800;
  }
`;

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorites</Link>
        </Navigation>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
