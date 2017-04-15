import axios from 'axios';

const api = 'http://localhost:3000';

export default {
  authenticated: false,
  login(cre) {
    axios.post(`${api}/login`, {
      ...cre,
    }).then((res) => {
      if (res.data.success) {
        this.authenticated = true;
      }
    }).catch((err) => {
      console.log(err);
    });
  },
  logout() {
    axios.get(`${api}/logout`)
    .then((res) => {
      if (res.data.success) {
        this.authenticated = false;
      }
    }).catch((err) => {
      console.log(err);
    });
  },

};
