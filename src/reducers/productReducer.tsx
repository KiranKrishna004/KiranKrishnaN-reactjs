import { Action, AnyAction, Reducer } from "redux";
import { Products } from "../interfaces/interfaces";

const initialState = { products: [] };

export const productReducer = (
  state: {
    products: Products[];
  } = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "GETPRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    default:
      return state;
  }
};
