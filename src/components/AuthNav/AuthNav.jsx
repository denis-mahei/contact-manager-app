import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
      >
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
