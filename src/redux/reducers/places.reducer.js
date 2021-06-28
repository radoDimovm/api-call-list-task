import { SET_PLACES } from "../types/places.types";

const placesReducer = (state = [], action) => {
  switch(action.type) {
    case SET_PLACES:
      return action.payload;
    default:
      return state;
  }
}

export default placesReducer;