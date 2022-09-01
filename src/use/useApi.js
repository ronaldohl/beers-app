import {api} from '@/providers/api'

export function useApi(){
    

    async function make(url){
        try{
            const response = await api.get(url)

            return response.data
        }catch(error){
            console.log(error)
            return {
                response: null
            }
        }
    }

    return {make}
}