import {
  CREATE_USER, HIDE_MESSAGE, SHOW_MESSAGE, LOGIN_USER, USER_CHECK_STATE,
} from '../../ActionTypes/Actions';
import HttpManager from '../../../Services/ConnectionService';
import {
  AuthApiBaseUrl,
  AuthApiCheckUrl,
  AuthApiLoginUrl,
  AuthApiRegisterUrl,
  LocalStorageTokenItem,
} from '../../../App/Consts';

export function CreateUser(user) {
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
      window.location.href = '/';
    } catch (e) {
      dispatch({
        type: SHOW_MESSAGE,
        message: e.message,
        messageType: 'error',
      });
    }
  };
}

export function LoginUser(user) {
  return async (dispatch) => {
    try {
      const response = await HttpManager.post(AuthApiLoginUrl, {
        email: user.email,
        password: user.password,
      }, {
        baseURL: AuthApiBaseUrl,
      });
      if (!response.success) {
        dispatch({
          type: SHOW_MESSAGE,
          message: response.message,
          messageType: 'error',
        });
      } else {
        localStorage.setItem(LocalStorageTokenItem, response.body.token);
        window.location.href = '/';
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export function logoutUser() {
  return () => {
    localStorage.removeItem(LocalStorageTokenItem);
    window.location.href = '/';
  };
}

export function checkIfUserLogged() {
  return async (dispatch) => {
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
  };
}

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
