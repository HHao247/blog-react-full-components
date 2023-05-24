import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://wp-api.test/wp-json',
// });


const API = {
  call: function () {
    return axios.create({
      baseURL: 'http://wp-api.test/wp-json',
    });
  },
  callWithTokenBearer: function (token) {
    if (token) token = localStorage.getItem('ACCESS_TOKEN');
    return axios.create({
      baseURL: 'http://wp-api.test/wp-json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default API;