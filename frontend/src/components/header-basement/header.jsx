import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout, selectIsAuth } from "../redux/authSlice";

import s from "./../styles/header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
  };
  
  return (
    <header className={s.header}>
      <div className={s.navBar}>
        <Link to="/posts" className={s.header}>
          <h2>Welcome</h2>
        </Link>
        <Link to="/forum" className={s.header}>
          Forum
        </Link>
        <Link to="/profile" className={s.header}>
          Profile
        </Link>
      </div>

      {isAuth ? (
        <div className={s.headerIsAuth}>
          <Link to="/post-editor">
            <button className={s.newPost}>New post</button>
          </Link>
          <button onClick={onClickLogout} className={s.logout}>
            Log out
          </button>
        </div>
      ) : (
        <Link to="/log-in" className={s.loginButton}>
          <button className={s.login}>Auth</button>
        </Link>
      )}
    </header>
  );
};
