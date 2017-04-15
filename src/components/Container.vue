<template>
  <div>
    <ul>
      <li><router-link to="/todo">/todo</router-link></li>
      <li><router-link to="/user">/user</router-link></li>
      <li><router-link to="/login">/login</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'container',
};
</script>
