<<<<<<< HEAD
//const user = JSON.parse(localStorage.getItem('user'));
const state={
      //  isLoggedIn: !!localStorage.getItem("token"),
        users: [
          {
            id: 1,
            nome: "Sara",
            sobrenome:"Rodrigues",
            data_nascimento: "13-08-1996",
            username: "sara",
            password: "123",
            id_contactos:1,
            id_tipoUser:2
          },
          {
            id: 2,
            nome: "Tiago",
            sobrenome:"Fernandes",
            data_nascimento: "07-07-1996",
            username: "tiagonandes",
            password: 78,
            id_contactos:3,
            id_tipoUser:1
          },
          {
            id: 3,
            nome: "Diogo",
            sobrenome:"",
            data_nascimento: "",
            username: "diogo",
            password: 65,
            id_contactos:2,
            id_tipoUser:2
          }]
}
const mutations={

  login(context, { name, pass }) {
    alert(JSON.stringify(this.state.state.users))

    var loggedIn = false
    var users = []
    var userId= null
    users = this.state.state.users
    for (var user in users) {
      if (users[user] != null) {
        if (JSON.stringify(users[user].username) == JSON.stringify({ name }.name)) {
          if (users[user].password == { pass }.pass) {
            loggedIn = true
            userId = users[user].id
          }
        }
      }
    }
    if (loggedIn) {
      alert("Login efetuado com sucesso");
      alert(this.getters.getlastID)
      localStorage.setItem("token", userId)
      router.push("/usersList")
    }else if(!loggedIn){
      alert("dados incorretos")
      router.go()      }
    
  },
  register(context,{data}){
    localStorage.clear()
    const newId=this.getters.getlastID

    alert(JSON.stringify(data.data_nascimento))
    let newUser={
      id: newId,
      nome: data.nome,
      sobrenome: data.sobrenome,
      data_nascimento: data.data_nascimento,
      username: data.username,
      password: data.password,
      id_tipoUser:data.id_tipoUser
    }
    this.state.users.push(newUser)
    alert(JSON.stringify(this.state.users))
  }
}
export const users = {
    namespaced: true,
    state,
    mutations
};
=======
//const user = JSON.parse(localStorage.getItem('user'));
const state={
      //  isLoggedIn: !!localStorage.getItem("token"),
        users: [
          {
            id: 1,
            nome: "Sara",
            sobrenome:"Rodrigues",
            data_nascimento: "13-08-1996",
            username: "sara",
            password: "123",
            id_contactos:1,
            id_tipoUser:2
          },
          {
            id: 2,
            nome: "Tiago",
            sobrenome:"Fernandes",
            data_nascimento: "07-07-1996",
            username: "tiagonandes",
            password: 78,
            id_contactos:3,
            id_tipoUser:1
          },
          {
            id: 3,
            nome: "Diogo",
            sobrenome:"",
            data_nascimento: "",
            username: "diogo",
            password: 65,
            id_contactos:2,
            id_tipoUser:2
          }]
}
const mutations={

  login(context, { name, pass }) {
    alert(JSON.stringify(this.state.state.users))

    var loggedIn = false
    var users = []
    var userId= null
    users = this.state.state.users
    for (var user in users) {
      if (users[user] != null) {
        if (JSON.stringify(users[user].username) == JSON.stringify({ name }.name)) {
          if (users[user].password == { pass }.pass) {
            loggedIn = true
            userId = users[user].id
          }
        }
      }
    }
    if (loggedIn) {
      alert("Login efetuado com sucesso");
      alert(this.getters.getlastID)
      localStorage.setItem("token", userId)
      router.push("/usersList")
    }else if(!loggedIn){
      alert("dados incorretos")
      router.go()      }
    
  },
  register(context,{data}){
    localStorage.clear()
    const newId=this.getters.getlastID

    alert(JSON.stringify(data.data_nascimento))
    let newUser={
      id: newId,
      nome: data.nome,
      sobrenome: data.sobrenome,
      data_nascimento: data.data_nascimento,
      username: data.username,
      password: data.password,
      id_tipoUser:data.id_tipoUser
    }
    this.state.users.push(newUser)
    alert(JSON.stringify(this.state.users))
  }
}
export const users = {
    namespaced: true,
    state,
    mutations
};
>>>>>>> 7d97ff913b7d16fdf703077e655a14fed014bdbf
