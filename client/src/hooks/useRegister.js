import axios from 'axios';

let urlUsed = "http://localhost:4000"
/* let urlUsed = "http://groupe1.hetic-projects.arcplex.tech/"
 */
export default function useRegister() {
  return (firstName, lastName, email, password, passwordConfirm) => {
    return axios({
      url: urlUsed + '/foo/user/register',
      method: 'post',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.data)
      .catch((res) => res.response.data);
  };
}
