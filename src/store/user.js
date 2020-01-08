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
const actions={


login(username,password) {
    alert(username )
    alert(password)
  /*  for (var user in this.state.users){
      if (user.name== username && user.password ==password){
        alert("Login efetuado com sucesso");

      }
    }*/
}
}
export const users = {
    namespaced: true,
    state,
    actions,
    //mutations
};
