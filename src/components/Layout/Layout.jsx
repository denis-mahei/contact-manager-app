import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar.jsx';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.appContainer}>
      <AppBar />
      <Outlet />
    </div>
  );
};
export default Layout;
