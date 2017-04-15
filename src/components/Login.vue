<template>
  <div>
    <h2>Login</h2>
    <span>username: </span><br>
    <input v-model="credentials.username" type="text"><br>
    <span>pwd: </span><br>
    <input v-model="credentials.password" type="password">
    <button v-on:click="login">Login</button>
    <hr>
  </div>
</template>

<script>
import auth from '../auth';

export default {
  name: 'user',
  data() {
    return {
      credentials: {
        password: '',
        username: '',
      },
    };
  },
  methods: {
    login() {
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password,
      };
      auth.login(credentials);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
