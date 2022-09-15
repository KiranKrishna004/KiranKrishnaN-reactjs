import { AnyAction } from "redux";
import { Categories } from "../interfaces/interfaces";

const initialState = { categories: [] };
export const categoriesReducer = (
  state: { categories: Categories[] } = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "GETCATEGORIES":
      return {
        ...state,
        categories: [...state.categories, ...action.payload],
      };
    default:
      return state;
  }
};
