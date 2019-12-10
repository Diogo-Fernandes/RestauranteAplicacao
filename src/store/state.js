const state = {
    isLoggedIn: !!localStorage.getItem("token"),
    users: [
        {
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
    ],
    
}
export default {
    state
}