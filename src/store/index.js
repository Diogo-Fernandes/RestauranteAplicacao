import Vue from 'vue'
import Vuex from 'vuex'
//import router from '../router/index'
//import { user } from './user'
Vue.use(Vuex)

/*
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";*/
//const user = JSON.parse(localStorage.getItem('user'));
import state from '../store/state.js'
import {mutations} from '../store/mutations'
//import User from './user.js'
export default new Vuex.Store({

modules:{
//User
},
state,
mutations,
  getters: {
    getAllUsers: state => state.state.users,
    getlastID: state => state.state.users[state.state.users.length-2].id+1

  }
})
