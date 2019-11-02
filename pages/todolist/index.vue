<template>
  <div class="container">
    <div>
      <h1 v-if="todos.length === 0" class="title">
        todolist page
      </h1>
      <ul v-else>
        <li v-for="todo in todos" :key="todo._id">{{ todo.description }}</li>
      </ul>
      <div class="links">
        <nuxt-link class="button--grey" to="/">HOME</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    }
  },

  mounted() {
    this.$axios.$get("items")
      .then((response) => {
        this.todos = response
      })
      .catch((e) => {
        console.error(e)
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
