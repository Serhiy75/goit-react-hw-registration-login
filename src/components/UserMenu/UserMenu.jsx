import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <ul className={css.userlist}>
        <li className={css.useritem}>
          <NavLink to="/contacts" className={css.navlink}>
            Contacts
          </NavLink>
        </li>
        <p className={css.welcome}>Welcome: {user.name}</p>
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </ul>
    </>
  );
};
