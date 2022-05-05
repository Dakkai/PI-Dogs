import axios from "axios";
import { CLEAR_STATE, GET_DOGS, SEARCH,ORD_ASC,ORD_DESC,PESO_MAX,PESO_MIN,IN_DB, NOT_IN_DB,GET_TEMPS, TEMP,GET_DOG_ID, PAGE, SET_PAGE} from "./actionsType";


export function getDogs() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/dogs")
      .then(res =>  dispatch({ type: GET_DOGS, payload: res.data }));
  };
}
export function getemps() {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/temperament")
      .then(res =>  dispatch({ type: GET_TEMPS, payload: res.data }));
  };
}
export function GetDogId(id) {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then(res =>  dispatch({ type: GET_DOG_ID, payload: res.data[0] }));
  };
}
export function ClearState(State) {
  return {
    type:CLEAR_STATE,
    payload : State
  }
}

export function SearchDogs(searching){
  return {
    type:SEARCH,
    payload : searching
  }
}
export function SetPage(pag){
  return {
    type:SET_PAGE,
    payload : pag
  }
}

export function SetActualPath(Page){
  return {
    type:PAGE,
    payload : Page
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
