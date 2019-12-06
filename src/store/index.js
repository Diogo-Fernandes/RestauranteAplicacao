import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
//import { user } from './user'
Vue.use(Vuex)

/*
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";*/
const user = JSON.parse(localStorage.getItem('user'));

export default new Vuex.Store({

  state: {
    isLoggedIn: !!localStorage.getItem("token"),
    users: [{
        id: 1,
        nome: "Sara",
        sobrenome: "Rodrigues",
        data_nascimento: "13-08-1996",
        email: "9150336@esmad.ipp.pt",
        username: "sara",
        password: "123",
        id_tipoUser: 2
      },
      {
        id: 2,
        nome: "Tiago",
        sobrenome: "Fernandes",
        data_nascimento: "07-07-1996",
        email: "9150336@esmad.ipp.pt",
        username: "tiagonandes",
        password: "78",
        id_tipoUser: 1
      },
      {
        id: 3,
        nome: "Diogo",
        sobrenome: "Fernandes",
        data_nascimento: "",
        email: "9150336@esmad.ipp.pt",
        username: "diogo",
        password: "65",
        id_tipoUser: 2
      },
      user
    ]
  },
  actions: {
    login(context, {
      name,
      pass
    }) {
      alert(JSON.stringify(this.state.users))

      var loggedIn = false
      var users = []
      var userId = null
      users = this.state.users
      for (var user in users) {
        if (users[user] != null) {
          if (JSON.stringify(users[user].username) == JSON.stringify({
              name
            }.name)) {
            if (users[user].password == {
                pass
              }.pass) {
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
      } else if (!loggedIn) {
        alert("dados incorretos")
        router.go()
      }

    },
    register(context, {
      data
    }) {
      localStorage.clear()
      const newId = this.getters.getlastID

      alert(JSON.stringify(data.data_nascimento))
      let newUser = {
        id: newId,
        nome: data.nome,
        sobrenome: data.sobrenome,
        data_nascimento: data.data_nascimento,
        username: data.username,
        password: data.password,
        id_tipoUser: data.id_tipoUser
      }
      this.state.users.push(newUser)
      alert(JSON.stringify(this.state.users))
    }
  },
  getters: {
    getAllUsers: state => state.users,
    getlastID: state => state.users[state.users.length - 2].id + 1

  }
})