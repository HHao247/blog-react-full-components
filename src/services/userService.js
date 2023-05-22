import API from "./api";

const userService = {
  login: function (data = {}) {
    return API.post('/jwt-auth/v1/token', data);
  },
  register: function (data) {
    return API.post('/wp/v2/users/register', data)
  }
}

export default userService