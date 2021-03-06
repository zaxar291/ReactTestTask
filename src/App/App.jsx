import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../Components/Navigation/Navigation';
import {
  HomePageRoute, CommentsPageRoute, RegistrationPageRoute, LoginPageRoute,
} from './Routes';
import {
  HomePage, Comments, LoginPage, RegistrationPage,
} from '../Pages/index';
import { checkIfUserLogged } from '../Redux/Actions/UserActions/UserActions';
import { isLoggedInSelector } from '../Redux/Selectors/UserSelectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isLoggedInSelector);
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(checkIfUserLogged());
    }
  }, []);

  return (
    <div id="page-wrap">
      <Router>
        <div id="navigation">
          <Navigation />
        </div>
        <div id="the-content">
          <Switch>
            <Route exact path={HomePageRoute}>
              <HomePage />
            </Route>
            <Route path={LoginPageRoute}>
              <LoginPage />
            </Route>
            <Route path={RegistrationPageRoute}>
              <RegistrationPage />
            </Route>
            <Route path={CommentsPageRoute}>
              <Comments />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
