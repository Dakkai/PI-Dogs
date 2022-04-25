import { GET_DOGS } from "../actions/actionsType";

const initialState = {
  dogs: [],
};

export default function Reducer (state = initialState, { type, payload }) {
  switch (type) {
    case GET_DOGS:
      return {
          ...state,
          dogs: payload
      };

    default:
      return state;
  }
}
