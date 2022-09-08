
import { useApi } from "./useApi";
import store from '@/store'

const {make} = useApi()
// import { mapActions } from "vuex";


export function  useStore(){

    //Obtiene todos los resultados (325)
    async function getAllData() {
    // this.loading = true;
    // ...mapActions(['setBeers'])
    let page = 1
    let beers = []
    let dataWithResults = true 
        while(dataWithResults){
            //per_page=80 es el máximo aceptado por la API
            let data = await make(`/beers?page=${page}&per_page=80`);
            if(data.length > 0){
                beers.push(...data);
                //commit setData
                page++
            }else {
                dataWithResults = false
                // this.loading = false
                // return
            }
        }
    store.commit('setBeers', beers)

    // console.log('store:  ', store.state.beers)
        
    }

    getAllData()

    function getBeers(){
        return (store.state.beers)
    }

    return {getAllData, getBeers}
}