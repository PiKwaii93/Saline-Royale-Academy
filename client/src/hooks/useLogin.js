import axios from 'axios';

let urlUsed = "http://localhost:4000"
/* let urlUsed = "http://groupe1.hetic-projects.arcplex.tech/" */

export default function useLogin() {
  return (email, password) => {
    return axios({
      url: urlUsed + '/foo/user/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.data)
      .catch((res) => res.response.data);
  };
}
