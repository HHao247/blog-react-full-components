import userService from '../../services/userService';

export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_REGISTER = 'ACT_REGISTER';

export function actLogin(token) {
  return {
    type: ACT_LOGIN,
    payload: {
      token
    }
  }
}

export function actLoginAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.login(data);
      const token = response.data.token;
      dispatch(actLogin(token));
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
