import { SET_PLACES } from "../types/places.types"


export const setPlaces = (places) => {
  return {
      type: SET_PLACES,
      payload: places
  }
}
