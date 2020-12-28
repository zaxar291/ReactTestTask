import {
  CREATE_USER, HIDE_MESSAGE, SHOW_MESSAGE, LOGIN_USER, USER_CHECK_STATE, LOGOUT_USER,
} from '../../ActionTypes/Actions';
import HttpManager from '../../../Services/ConnectionService';
import {
  AuthApiBaseUrl,
  AuthApiCheckUrl,
  AuthApiLoginUrl,
  AuthApiRegisterUrl,
  LocalStorageTokenItem,
} from '../../../App/Consts';
import { HomePageRoute } from '../../../App/Routes';

export function fireMessage(message, type) {
  return (dispatch) => {
    dispatch({
      type: SHOW_MESSAGE,
      messageType: type,
      message,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_MESSAGE,
      });
    }, 10);
  };
}

export function CreateUser(user, history) {
  return async (dispatch) => {
    try {
      HttpManager.defaults.baseURL = AuthApiBaseUrl;
      const response = await HttpManager.post(AuthApiRegisterUrl, {
        email: user.email,
        password: user.password,
      }, {
        baseURL: AuthApiBaseUrl,
      });
      localStorage.setItem(LocalStorageTokenItem, response.token);
      dispatch({
        type: CREATE_USER,
        user,
      });
      dispatch({
        type: LOGIN_USER,
        isLoggedIn: true,
      });
      history.push(HomePageRoute);
    } catch (e) {
      dispatch(fireMessage(e.message, 'error'));
    }
  };
}

export function LoginUser(user, history) {
  return async (dispatch) => {
    try {
      const response = await HttpManager.post(AuthApiLoginUrl, {
        email: user.email,
        password: user.password,
      }, {
        baseURL: AuthApiBaseUrl,
      });
      if (!response.success) {
        dispatch(fireMessage(response.message, 'error'));
      } else {
        localStorage.setItem(LocalStorageTokenItem, response.body.token);
        dispatch({
          type: LOGIN_USER,
        });
        history.push(HomePageRoute);
      }
    } catch (e) {
      dispatch(fireMessage(e.message, 'error'));
    }
  };
}

export function logoutUser() {
  return (dispatch) => {
    localStorage.removeItem(LocalStorageTokenItem);
    dispatch({
      type: LOGOUT_USER,
    });
  };
}

export function checkIfUserLogged() {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_CHECK_STATE,
      });
      const token = localStorage.getItem(LocalStorageTokenItem);
      if (token) {
        const response = await HttpManager.post(AuthApiCheckUrl, {
          token,
        }, {
          baseURL: AuthApiBaseUrl,
        });
        if (response.success) {
          dispatch({
            type: CREATE_USER,
            user: {
              email: response.email,
            },
          });
          dispatch({
            type: LOGIN_USER,
            isLoggedIn: true,
          });
        }
      }
    } catch (e) {
      dispatch(fireMessage(e.message, 'error'));
    }
  };
}
