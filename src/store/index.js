import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    todos: [],
    users: {},
    darkmode: {}
  },
  mutations: {
    storedarkMode(state, payload){
      state.darkmode = payload
    },
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeUsers(state, payloads) {
      state.users = payloads
    },
    storeTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.push(payload)
      }
    },
    deleteTodo(state, id) {
      const index = state.todos.findIndex(todo => todo.id === id)
      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    }
  },
  actions: {
    getDarkMod({commit}){
      return axios.get('http://localhost:3000/darkmode')
      .then((response) => {
        commit('storedarkMode', response.data)
      })
    },
    getUsers({commit}){
      return axios.get('http://localhost:3000/users')
      .then((response) => {
        commit('storeUsers', response.data)
      })
    },

    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
              .then((response) => {
                commit('storeTodos', response.data)
                resolve()
              })
        }, 1000)
      })
    },

    addTodo({ commit }, data) {
      return axios.post('http://localhost:3000/todos', data).then((response) => {
        commit('storeTodo', response.data);
      })
    },

    updateDarkMode({commit}, data){
      return axios.put('http://localhost:3000/darkmode', data).then((response) => {
        commit('storedarkMode', response.data)
      })
    },

    updateTodo({commit}, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data).then((response) => {
        commit('storeTodo', response.data);
      })
    },

    deleteTodo({commit}, id) {
      return axios.delete(`http://localhost:3000/todos/${id}`).then(() => {
        commit('deleteTodo', id);
      })
    }
  },
  getters: {
  },
  modules: {
  }
})