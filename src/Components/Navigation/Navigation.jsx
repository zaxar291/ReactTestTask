import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomePageRoute, CommentsPageRoute, LoginPageRoute, RegistrationPageRoute,
} from '../../App/Routes';
import { logoutUser } from '../../Redux/Actions/UserActions/UserActions';

const Navigation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const logoutCurrentUser = () => {
    history.push(HomePageRoute);
    dispatch(logoutUser());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to={HomePageRoute} className="navbar-brand">Main</NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mainNav">
        <ul className="navbar-nav">
          {!isLoggedIn && (
          <li className="nav-item">
            <NavLink to={LoginPageRoute} className="nav-link">Login</NavLink>
          </li>
          )}
          {!isLoggedIn
                    && (
                    <li className="nav-item">
                      <NavLink to={RegistrationPageRoute} className="nav-link">Registration</NavLink>
                    </li>
                    )}
          <li className="nav-item">
            <NavLink to={CommentsPageRoute} className="nav-link">Comments</NavLink>
          </li>
          {isLoggedIn && <li className="nav-item"><NavLink to="" onClick={logoutCurrentUser} className="nav-link">Logout</NavLink></li> }
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
