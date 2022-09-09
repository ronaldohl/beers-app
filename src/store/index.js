import Vue from 'vue'
import Vuex from 'vuex'
import { useApi } from "@/use/useApi";
const {make} = useApi()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers : [],
    filters: {
      abv : '',
      attenuation_level : '',
      ebc: '',
      ibu: ''
    },
    loading: false
  },
  getters: {
    filteredBeers(state){
      let beers = state.beers
      for (const key in state.filters) {
        const value = state.filters[key]
        if(value){
          beers = beers.filter(beer => {
            //cambiar comparador segun key
            return beer[key] == value
          })
        }
      }
      return beers
    }
  },
  mutations: {
    setFilters(state, filters){
      state.filters = filters
    },
    setBeers(state, beers){
      state.beers = beers
    }
  },
  actions: {
    async  getAllData(state) {
      state.loading = true;
      // ...mapActions(['setBeers'])
      let page = 1
      let beers = []
      let dataWithResults = true 
      while(dataWithResults){
        //per_page=80 es el máximo aceptado por la API
        let data = await make(`/beers?page=${page}&per_page=80`);
        if(data.length > 0){
            beers.push(...data);        
            page++
        }else {
            dataWithResults = false
      
        }
      }      
      state.commit('setBeers', beers)
      state.loading = false
      
  
      // console.log('store:  ', store.state.beers)
          
      }
  },
  modules: {
  }




})

