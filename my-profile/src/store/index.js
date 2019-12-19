import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'Platano', cantidad: 0},
      {nombre: 'Pera', cantidad: 0},
      {nombre: 'Kiwi', cantidad: 0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++;
    },
    reset(state){
      state.frutas.map(frt => frt.cantidad = 0);
    }
  },
  actions: {
  },
  modules: {
  }
})
