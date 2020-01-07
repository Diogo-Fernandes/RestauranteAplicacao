import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/*
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";*/
//const user = JSON.parse(localStorage.getItem('user'));
import state from '../store/state.js'
import {mutations} from '../store/mutations'
//* IMPORTA MODULO USER */
//import User from './user.js'

export default new Vuex.Store({
modules:{
/*EXPORTA MODULO USER*/ 
//User
},
state,
mutations,
  getters: {
    getAllUsers: state => state.state.users,
    getlastID: state => state.state.users[state.state.users.length-2].id+1

  }
})
