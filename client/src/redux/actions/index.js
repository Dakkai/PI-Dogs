import  axios from "axios"
import { GET_DOGS } from "./actionsType"


export function getDogs(){
    return async function(dispatch){
        let dosg = await axios.get("http://localhost:3001/dogs")
        return dispatch({
            type: GET_DOGS,
            payload : dogs.data
        })
    }

}