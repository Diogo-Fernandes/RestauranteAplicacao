<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
<router-link to="/login" v-if="!isLoggedIn">Login</router-link>
<br>
<router-link to="/usersList">usersList</router-link>
<br>
<br>
<router-link to="/register">Registo</router-link>

    <!-- <a href="#" v-if="isLoggedIn" @click="logout">Logout</a>  -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
