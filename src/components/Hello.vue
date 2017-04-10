<template>
  <div class="hello">
    <h1>Todos</h1>
    <input type="text" v-model="message" v-on:keyup.enter="addtodo">

    <ul id="example-1">
      <li v-for="todo in todos" v-if="!todo.deleted">
        <span>{{ todo.created_at | moment("LLL") }}</span>
        {{ todo.content }}
        <button v-on:click="deletedtodo(todo)">Del</button>
      </li>
    </ul>

    <hr>

    <h1>Deleteds</h1>
    <ul id="example-2">
      <li v-for="todo in todos" v-if="todo.deleted">
        <span>{{ todo.updated_at | moment("LLL") }}</span>
        {{ todo.content }}
      </li>
    </ul>

  </div>
</template>

<script>
const api = 'http://localhost:3000/todos';

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
      this.axios.get(`${api}`)
        .then((res) => {
          this.todos = res.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    addtodo() {
      this.axios.post(`${api}`, {
        content: this.message,
      }).then(() => {
        this.gettodos();
        this.message = '';
      }).catch((err) => {
        console.log(err);
      });
    },
    deletedtodo(todo) {
      /* eslint-disable dot-notation */
      this.axios.put(`${api}/${todo['_id']}`, {
        deleted: true,
        updated_at: Date.now(),
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
