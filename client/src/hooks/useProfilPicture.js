import axios from 'axios';

let urlUsed = "http://localhost:4000"
/* let urlUsed = "http://groupe1.hetic-projects.arcplex.tech/" */

export default function useProfilPicture() {
  return (formData) => {
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    return axios.post(urlUsed + '/foo/user/upload', formData)
    .then((res) => res.data)
    .catch((res) => res.response.data);
    /* axios({
      url: urlUsed + '/foo/user/upload',
      method: 'post',
      data: {
        formData: formData,
      },
    })
      .then((res) => res.data)
      .catch((res) => res.response.data);*/
  }; 
}
