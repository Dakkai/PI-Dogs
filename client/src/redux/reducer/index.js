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
} from "../actions/actionsType";

const initialState = {
  dogs: [],
  actualDogs: [],
  Temperaments: [],
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
    case GET_TEMPS:
      return {
        ...state,
        Temperaments: payload,
      };
    case TEMP:
      console.log(payload)
      Aux = state.actualDogs.filter((dog) => {
        if (dog.Temperamentos?.includes(payload)) return dog;
      })
      return {
        ...state,
        actualDogs: Aux,
      };
    case SEARCH:
      Aux = state.dogs.filter((dog) => {
        if (dog.name.toLowerCase().includes(payload.toLowerCase())) return dog;
      });
      console.log(Aux);
      return {
        ...state,
        actualDogs: Aux,
      };
    case IN_DB:
      Aux = state.dogs.filter((dog) => {
        if (dog.In === "DB") {
          return dog;
        }
      });
      console.log("DB :me LAmmaron /n", Aux2);
      Aux2 = Aux.map((dog) => dog);
      console.log(Aux2);

      return {
        ...state,
        actualDogs: Aux2,
      };
    case NOT_IN_DB:
      Aux = state.dogs.filter((dog) => {
        if (dog.In === "API") {
          return dog;
        }
      });
      console.log("API:me LAmmaron /n");
      Aux2 = Aux.map((dog) => dog);
      console.log(Aux2[0]);
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

    default:
      return state;
  }
}
