<template>
  <div>
    <form class="login" @submit.prevent="loginForm()">
      <h1>Sign in</h1>
      <label>username</label>
      <input required v-model="username" type="username" placeholder="Name" />
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password" />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import {  mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
...mapMutations(['mutations',['login', 'logout']]),
    loginForm(){
      const name = this.username
      const pass = this.password
    this.$store.commit("login",{name,pass})
    }
  }
};
</script>