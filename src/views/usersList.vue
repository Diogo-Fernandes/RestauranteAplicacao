<template>
  <div class="hello">
    <div>{{this.$store.getters.getAllUsers}}</div>
 
  </div>
</template>

<script>/*
const usersList = {
  template:`<div>{{users}}</div>`,
  computed:{
    users(){
      return this.$store.a.getters.getAllUsers
    }
  }
}
export default{
    usersList
}/*
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}*/
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
