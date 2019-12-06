<template>
 <div>
   <form class="login" @submit.prevent="loginForm()">
     <h1>Sign in</h1>
     <label>username</label>
     <input required v-model="username" type="username" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit" >Login</button>
   </form>
 </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
//computed:{        
//...mapState('account', ['status'])},

  methods: {
/*...mapActions('a', ['login', 'logout']),
    loginForm() {
      const username= this.username
      const password= this.password
      //return this.login({username,password})
      this.$store.dispatch("login", {
        username:username,
        password:password
      }).then(() => {
        alert(this.password + this.username)
        //this.$router.push("/")
      });
    }*/
...mapActions(['login', 'logout']),
    loginForm(){
      //login()
      const name = this.username
      const pass = this.password
      this.$store.dispatch("login", {name, pass})}
  }
};
</script>