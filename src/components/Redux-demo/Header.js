import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector((state => state.authReducer.isAuthenticated));
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
    console.log('Is authenticated', isAuthenticated)
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           {isAuthenticated && <button onClick={logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
