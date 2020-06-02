import axios from 'axios'

const Axios = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

Axios.interceptors.request.use (
  function (config) {
    const token = localStorage.token
    if (token) config.headers.Token = token;
    return config;
  },
  function (error) {
    return Promise.reject (error);
  }
);

Axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  // Do something with response error
  if (error.response.status === 401) {
    window.location = 'logout'
    return Promise.reject('Sessão encerrada!');
  } else {
    return Promise.reject(error.response);
  }
});

export default Axios
