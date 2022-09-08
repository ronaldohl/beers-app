

import store from '@/store'


// import { mapActions } from "vuex";


export function  useStore(){

    //Obtiene todos los resultados (325)
    function getAllData(){
        store.dispatch('getAllData')
    }

    function getBeers(){
        return (store.state.beers)
    }
    
    return { getAllData, getBeers}

}