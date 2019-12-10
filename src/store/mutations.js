import router from '../router/index'

const mutations = {
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
export {
    mutations
}