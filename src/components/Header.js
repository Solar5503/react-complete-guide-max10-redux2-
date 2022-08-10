import { useDispatch, useSelector } from 'react-redux/es/exports';
import { authActions } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuth);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(authActions.logout())}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
