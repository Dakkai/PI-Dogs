import axios from "axios";
import { GET_DOGS, SEARCH,ORD_ASC,ORD_DESC,PESO_MAX,PESO_MIN,IN_DB, NOT_IN_DB,GET_TEMPS, TEMP} from "./actionsType";


export function getDogs() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/dogs")
      .then(console.log("llamada axios"))
      .then(res =>  dispatch({ type: GET_DOGS, payload: res.data }));
  };
}
export function getemps() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/temperament")
      .then(console.log("llamada axios"))
      .then(res =>  dispatch({ type: GET_TEMPS, payload: res.data }));
  };
}

export function SearchDogs(searching){
  return {
    type:SEARCH,
    payload : searching
  }
}
export function TempFilter(temp){
  return{
    type: TEMP,
    payload: temp
  }
}
export function orderAsc(){ 
  return {
    type:ORD_ASC,
  }
 }
 export function orderDesc(){ 
  return {
    type:ORD_DESC,
  }
 }
 export function weightUp(){ 
  return {
    type:PESO_MAX,
  }
 }
 export function weightDown(){ 
  return {
    type:PESO_MIN,
  }
 }
export function FilterDB() {
  return {
    type:IN_DB,
  }
}export function FilterAPI() {
  return {
    type:NOT_IN_DB,
  }
}
