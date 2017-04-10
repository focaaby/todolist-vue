<template>
  <div class="hello">
    <h1>Todos</h1>
    <input type="text" v-model="message" v-on:keyup.enter="addtodo">

    <ul id="example-1">
      <li v-for="todo in todos">
        <span>{{ todo.created_at | moment("LLL") }}</span>
        {{ todo.content }}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hello',
  data() {
    return {
      message: '',
      todos: [],
    };
  },
  created() {
    this.gettodos();
  },
  methods: {
    gettodos() {
      axios.get('http://localhost:3000/todos')
      .then((res) => {
        this.todos = res.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    addtodo() {
      axios.post('http://localhost:3000/todos', {
        content: this.message,
      }).then(() => {
        this.gettodos();
        this.message = '';
      }).catch((err) => {
        console.log(err);
      });
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
