import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from '../Components/Navigation/Navigation'
import {HomePageRoute, CommentsPageRoute, RegistrationPageRoute, LoginPageRoute, LogoutPageRoute} from './Routes'
import HomePage from '../Pages/HomePage/HomePage'
import Comments from '../Pages/CommentsPage/CommentsPage'
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage";
import {useDispatch, useSelector} from "react-redux";
import {checkIfUserLogged} from "../Redux/Actions/UserActions/UserActions";
import LogoutPage from "../Pages/LogoutPage/LogoutPage";

const App = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(checkIfUserLogged())
        }
    }, [])

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
                            <LoginPage/>
                        </Route>
                        <Route path={RegistrationPageRoute}>
                            <RegistrationPage />
                        </Route>
                        <Route path={CommentsPageRoute}>
                            <Comments />
                        </Route>
                        <Route path={LogoutPageRoute}>
                            <LogoutPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
