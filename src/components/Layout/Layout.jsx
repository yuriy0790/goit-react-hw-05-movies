import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
