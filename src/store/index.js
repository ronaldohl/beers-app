import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers : [],
    filters: [],
    beersFiltered : []
  },
  getters: {
    
  },
  mutations: {
    setFilters(){

    },
    setFilteredBeers(){

    },
    setBeers(state, beers){
      state.beers = beers
    }
  },
  actions: {
  
  },
  modules: {
  }
})
