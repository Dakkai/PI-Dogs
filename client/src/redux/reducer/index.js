import {
  GET_DOGS,
  SEARCH,
  ORD_ASC,
  ORD_DESC,
  PESO_MAX,
  PESO_MIN,
  IN_DB,
  NOT_IN_DB,
  GET_TEMPS,
  TEMP,
  GET_DOG_ID,
  CLEAR_STATE,
  PAGE,
  SET_PAGE,
} from "../actions/actionsType";

const initialState = {
  DogDetail: {},
  dogs: [],
  actualDogs: [],
  Temperaments: [],
  Actualpath: "",
  Actualpage: 1,
};

const ASC = (a, b) => {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;
  return 0;
};
const DESC = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

export default function Reducer(state = initialState, { type, payload }) {
  let Aux = [];
  let Aux2 = [];
  switch (type) {
    case GET_DOGS:
      Aux = payload.sort(DESC);
      return {
        ...state,
        dogs: Aux,
        actualDogs: Aux,
      };
    case GET_DOG_ID:
      return {
        ...state,
        DogDetail: payload,
      };
    case GET_TEMPS:
      return {
        ...state,
        Temperaments: payload,
      };
      
    case TEMP:
      Aux = state.dogs.filter((dog) => {if (dog.Temperamentos?.includes(payload)) return dog});
      return {
        ...state,
        actualDogs: Aux,
      };
    case SET_PAGE:
      return {
        ...state,
        Actualpage: payload,
      };
    case SEARCH:
      Aux = state.dogs.filter((dog) => { if (dog.name.toLowerCase().includes(payload.toLowerCase())) return dog;});
      return {
        ...state,
        actualDogs: Aux,
      };
    case IN_DB:
      Aux = state.dogs.filter((dog) => {if (dog.In === "DB") return dog; });
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };
    case NOT_IN_DB:
      Aux = state.dogs.filter((dog) => {if (dog.In === "API") {return dog;}
      });
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };

    case ORD_ASC:
      Aux = state.actualDogs.sort(ASC);
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };
    case ORD_DESC:
      Aux = state.actualDogs.sort(DESC);
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };
    case PESO_MAX:
      Aux = state.actualDogs.sort((a, b) => {
        if (a.pesoMax > b.pesoMax) return -1;
        if (a.pesoMax < b.pesoMax) return 1;
        return 0;
      });
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };
    case PESO_MIN:
      Aux = state.actualDogs.sort((a, b) => {
        if (!a.pesoMin || !b.pesoMin) return 1;
        if (a.pesoMin > b.pesoMin) return 1;
        if (a.pesoMin < b.pesoMin) return -1;
        return 0;
      });
      Aux2 = Aux.map((dog) => dog);
      return {
        ...state,
        actualDogs: Aux2,
      };
    case CLEAR_STATE:
      return {
        ...state,
        [payload]: {},
      };
    case PAGE:
      return {
        ...state,
        Actualpath: payload,
      };

    default:
      return state;
  }
}
