
import userService from '../../services/userService';

export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_REGISTER = 'ACT_REGISTER';
export const ACT_LOGOUT = 'ACT_LOGOUT';

export function actLogin(token, currentUser) {
  console.log(currentUser);
  console.log(token);
  return {
    type: ACT_LOGIN,
    payload: {
      token,
      currentUser,
    }
  }
}
export function actLogout() {
  return {
    type: ACT_LOGOUT,
    payload: null,
  };
}

export function actLoginAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.login(data);
      const token = response.data.token;
      //lấy thông tin user vừa đăng nhập
      dispatch(actFetchMeAsync(token));
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: "Thông tin đăng nhập sai"
      }
    }
  }
}

export function actRegisterAsync(data) {

  return async (dispatch) => {
    try {
      const response = await userService.register(data);
      return ({
        ok: true,
        register: response.data.register
      })
    }
    catch (error) {
      return ({
        ok: false,
        error: "Đăng ký thất bại "
      })
    }
  }
}


export function actFetchMeAsync(token) {
  console.log(token);
  console.log("hảo");
  return async (dispatch) => {
    try {
      if (!token) {
        token = localStorage.getItem('ACCESS_TOKEN');
      } else {
        localStorage.setItem('ACCESS_TOKEN', token);
      }
      const responseMe = await userService.fetchMe();
      const currentUser = responseMe.data;
      dispatch(actLogin(token, currentUser));
    } catch (error) {
      dispatch(actLogout());
    }
  }
}