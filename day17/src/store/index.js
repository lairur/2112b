import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
  },
  getters: {
  },
  mutations: {
    add(state,obj){
      state.list.push(obj)
    },
    modify(state,obj){
      state.list[obj.index].name=obj.name
      state.list[obj.index].status=obj.status
      state.list[obj.index].time=obj.time
    }
  },
  actions: {
  },
  modules: {
  }
})
