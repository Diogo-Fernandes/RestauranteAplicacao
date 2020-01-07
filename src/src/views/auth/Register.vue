<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="nome">Name</label>
      <div>
          <input id="nome" type="text" v-model="nome" required autofocus>
      </div>
       <label for="sobrenome">Sobrenome</label>
      <div>
          <input id="sobrenome" type="text" v-model="sobrenome" required autofocus>
      </div>
       <label for="birthDate">Data de nascimento</label>
      <div>
          <input id="birthDate" type="date" v-model="birthDate" required autofocus>
      </div>
 <label for="id_tipoUser">Tipo de utilizador</label>
      <div>
          <input id="id_tipoUser" type="text" v-model="id_tipoUser"  autofocus>
      </div>
      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="text" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import {  mapMutations } from 'vuex'

export default {
  data() {
    return {
      nome: "",
      sobrenome:"",
      birthDate:"",
      email: "",
      password: "",
      password_confirmation: "",
      id_tipoUser:""
    };
  },
  methods: {
    ...mapMutations(['mutations',['register']]),
    register(){
      let data = {
        nome: this.nome,
        sobrenome:this.sobrenome,
        data_nascimento:this.birthDate,
        username: this.email+"@esmad.ipp.pt",
        password: this.password,
        id_tipoUser: this.id_tipoUser
      };
      this.$store.commit("register",{ data})
    }
  }
};
</script>